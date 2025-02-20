import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import PRODUCT_UPDATE_MESSAGE from '@salesforce/messageChannel/ProductUpdateMessage__c';
import recalculateScore from '@salesforce/apex/ProductScorecardController.recalculateScore';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ProductSummaryCard extends LightningElement {
    @api product;
    
    @wire(MessageContext)
    messageContext;

    handleRecalculate() {
        recalculateScore({ productId: this.product.Id })
            .then(updatedScore => {
                this.product.Score__c = updatedScore;
                this.showToast('Success', 'Score recalculated', 'success');

                publish(this.messageContext, PRODUCT_UPDATE_MESSAGE, { productId: this.product.Id });
            })
            .catch(error => {
                this.showToast('Error', 'Error recalculating score', 'error');
            });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
