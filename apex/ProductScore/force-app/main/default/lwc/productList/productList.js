import { LightningElement, wire, track } from 'lwc';
import getProducts from '@salesforce/apex/ProductScorecardController.getProducts';
import { subscribe, MessageContext } from 'lightning/messageService';
import PRODUCT_UPDATE_MESSAGE from '@salesforce/messageChannel/ProductUpdateMessage__c';
import { refreshApex } from '@salesforce/apex';

export default class ProductList extends LightningElement {
    @track products = [];
    @track filteredProducts = [];
    @track searchKey = '';
    @track selectedCategory = '';
    @track minScore = 0;
    @track sortedBy = 'Product_Name__c';
    @track sortDirection = 'asc';

    wiredProductsResult;

    @wire(MessageContext)
    messageContext;

    @wire(getProducts)
    wiredProducts(result) {
        this.wiredProductsResult = result;
        if (result.data) {
            this.products = result.data;
            this.applyFilters();
        }
    }

    connectedCallback() {
        subscribe(this.messageContext, PRODUCT_UPDATE_MESSAGE, (message) => this.refreshProductList(message));
    }

    handleSearch(event) {
        this.searchKey = event.target.value.toLowerCase();
        this.applyFilters();
    }

    handleCategoryFilter(event) {
        this.selectedCategory = event.target.value;
        this.applyFilters();
    }

    handleScoreFilter(event) {
        this.minScore = event.target.value;
        this.applyFilters();
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
        this.applyFilters();
    }

    applyFilters() {
        let filtered = [...this.products];

        if (this.searchKey) {
            filtered = filtered.filter(product => 
                product.Product_Name__c.toLowerCase().includes(this.searchKey)
            );
        }

        if (this.selectedCategory) {
            filtered = filtered.filter(product => 
                product.Category__c === this.selectedCategory
            );
        }

        filtered = filtered.filter(product => product.Score__c >= this.minScore);

        filtered.sort((a, b) => {
            let valueA = a[this.sortedBy];
            let valueB = b[this.sortedBy];
            return this.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        });

        this.filteredProducts = filtered;
    }

    refreshProductList() {
        refreshApex(this.wiredProductsResult);
    }
}
