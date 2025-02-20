import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/accountController.getAccounts';

export default class AccountListView extends LightningElement {
    @track accounts = [];
    @track filteredAccounts = [];
    @track currentPage = 1;
    recordsPerPage = 5;
    sortAscending = true;

    selectedAccountId;
    showModal = false;

    columns = [
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        {
            label: 'Action',
            type: 'button',
            typeAttributes: {
                label: 'View',
                name: 'view',
                variant: 'brand'
            }
        }
    ];

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.filteredAccounts = [...data];
        } else if (error) {
            console.error(error);
        }
    }

    // Compute total pages dynamically
    get totalPages() {
        return Math.ceil(this.filteredAccounts.length / this.recordsPerPage);
    }

    // Get paginated records
    get paginatedAccounts() {
        const start = (this.currentPage - 1) * this.recordsPerPage;
        return this.filteredAccounts.slice(start, start + this.recordsPerPage);
    }

    // Pagination Handlers
    handleNext() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }

    handlePrevious() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    // Open modal when "View" button is clicked
    handleRowAction(event) {
        const row = event.detail.row;
        this.selectedAccountId = row.Id;
        this.showModal = true;
    }

    // Close Modal
    handleCloseModal() {
        this.showModal = false;
        this.selectedAccountId = null;
    }
}
