public with sharing class ProductScorecardController {
    @AuraEnabled(cacheable=true)
    public static List<Product__c> getProducts() {
        return [SELECT Id, Product_Name__c, Category__c, Score__c FROM Product__c ORDER BY Product_Name__c];
    }

    @AuraEnabled
    public static Decimal recalculateScore(Id productId) {
        Product__c product = [SELECT Score__c FROM Product__c WHERE Id = :productId LIMIT 1];
        product.Score__c = Math.floor(Math.random() * 100); // Simulate score calculation
        update product;
        return product.Score__c;
    }
}
