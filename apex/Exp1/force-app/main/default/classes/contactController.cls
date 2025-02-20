public with sharing class contactController {
    @AuraEnabled(cacheable=true)
    public static Account getAccountDetails(String accountId) {
        return [
            SELECT Id, Name, NumberOfEmployees, Type,
                   (SELECT Id, Name, Email, Phone FROM Contacts)
            FROM Account
            WHERE Id = :accountId
        ];
    }
}
