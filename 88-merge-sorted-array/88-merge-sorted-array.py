class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        index1 = m-1
        index2 = n-1
        j = m + n -1
        
        while j >=0:
            
            # when nums1 is not there, then we need the below condition.
            # edge case nums1 =[0,0,0,0,0], m=0, nums2=[1,2,3,4,5], n=5
            if index2>=0 and (m==0 or nums2[index2] >= nums1[index1]):
                nums1[j] = nums2[index2]
                index2 -=1
                print("index2:", index2)
                print("first:", nums1)
                
            # for the condition when there is no element in array 2, 
            # then the value os index2 is 0, so we need a conditon index2> -1 
            # to carry out the implementation without occuring to index out of range error.
            # edge case nums1= [1], m=1, nums2= [], n=0
            elif index2 > -1 and nums1[index1] > nums2[index2]:
                nums1[j], nums1[index1] = nums1[index1], nums1[j]
                
                # if there are any more indices left to traverse, then decrement 
                # the index or else keep the index same.
                # Edge case: nums1 =[2,0], m=1, nums2=[1], n =1
                if index1:
                    index1 -=1
                print("index1:", index1)
                print("second:", nums1)
            j -=1
            
        # at the end if there is a negative value and still there are elements 
        # in nums2 then add those to nums1
        # Edge case:
        # nums1 =[0,0,3,0,0,0,0,0,0], m =3
        # nums2 = [-1,1,1,1,2,3], n =6
        if index2 >-1:
            for i in range(index2 +1):
                nums1[i] = nums2[i]