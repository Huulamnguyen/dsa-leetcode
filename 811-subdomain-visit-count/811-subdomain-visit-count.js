/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    
    const domainCount = {};
    
    for (let i = 0; i < cpdomains.length; i++){
        
        let count = cpdomains[i].split(" ")[0]
        let domain = cpdomains[i].split(" ")[1]
        
        // console.log(count)
        // console.log(domain)
        
        while(1){
            if(!domainCount[domain]){
                domainCount[domain] = Number(count)
            } else {
                domainCount[domain] += Number(count)
            }
            
             if(!domain.includes(".")) {
                break
            }
            
            domain = domain.substr(domain.indexOf(".") + 1)
            console.log(domain)
        }
    }
    
    // console.log(domainCount)
    
    const res = []
    
    for (let ele in domainCount){
        res.push(domainCount[ele] + " " + ele)
    }
    return res
};