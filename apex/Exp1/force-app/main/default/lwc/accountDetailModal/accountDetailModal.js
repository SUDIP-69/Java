import { LightningElement, api, wire, track } from 'lwc';
import getAccountDetails from '@salesforce/apex/contactController.getAccountDetails';

export default class AccountDetailModal extends LightningElement {
    @api accountId; 
    @track account;
    @track contactList = [];

    contactColumns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        {
            label: 'Action',
            type: 'button',
            typeAttributes: {
                label: 'View',
                name: 'view',
                variant: 'base'
            }
        }
    ];

    @wire(getAccountDetails, { accountId: '$accountId' })
    wiredAccount({ error, data }) {
        if (data) {
            this.account = data;
            this.contactList = data.Contacts || [];
        } else if (error) {
            console.error(error);
        }
    }

    // Close modal and notify parent
    closeModal() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}
