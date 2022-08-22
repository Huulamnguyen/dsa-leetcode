class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        
        domain_count = {}
        res = []
        
        for string in cpdomains:
            count = string.split(" ")[0]
            domain = string.split(" ")[1]
            
            # print(string.split(" "))
            # print(count)
            # print(domain)
            
            while len(cpdomains) > 0:
                if domain not in domain_count:
                    domain_count[domain] = int(count)
                else:
                    domain_count[domain] += int(count)
                    
                if "." not in domain:
                    break;
                
                domain = domain[domain.index(".") + 1: ]
                # print(domain)
        
        for ele in domain_count:
            res.append(str(domain_count[ele]) + " " + ele)
        return res