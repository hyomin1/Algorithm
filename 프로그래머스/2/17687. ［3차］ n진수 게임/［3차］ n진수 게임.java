import java.util.*;
class Solution {
    public String solution(int n, int t, int m, int p) {
        
        StringBuilder sb = new StringBuilder();
        StringBuilder ans = new StringBuilder();
       
        for(int i = 0; sb.length() <= t*m; i++) {
            sb.append(Integer.toString(i,n));
        }
        for(int i = p-1; ans.length() < t; i+=m) {
            ans.append(sb.charAt(i));
        }
        
        return ans.toString().toUpperCase();
    }
}