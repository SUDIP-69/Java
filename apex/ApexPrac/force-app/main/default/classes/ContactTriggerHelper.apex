public class ContactTriggerHelper {
    public static void updateContact(List<Contact> ContactList, List<Contact> ContactListOld)
    {
        for(Contact i : ContactList)
        {
            if(i.Amount__c >= 1000000)
                i.Premium_Contact__c = true;
            if(i.Amount__c < 1000000)
                i.Premium_Contact__c = false;
        }
    }
    
    
    public static void updateAccounts(List<Contact> ContactList)
    {
        Map<Id,Decimal> data = new Map<id,Decimal>();
        for(Contact i : ContactList)
        {
            if(Map)
        }
    }
}