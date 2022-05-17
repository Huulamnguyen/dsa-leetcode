/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    
    // Create a new Set (unique element of an array)
    const emailSet = new Set();
    
    // iterate over the emails array
    for(let email of emails){
        
        // split each email by '@'
        let [localName, domainName] = email.split('@');
        
        // replace '.' by an empty string and split by '+'
        localName = localName.replace(/\./g,"").split('+');
        
        // create new unique email
        let uniqueEmail = localName[0]+"@"+domainName;
        
        // Set array only contains unique element.
        emailSet.add(uniqueEmail)
    }
    
    return emailSet.size;
};