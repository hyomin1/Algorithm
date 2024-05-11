import java.util.*;
class Solution {
 
    public int solution(String str1, String str2) {
        int answer = 0;
        str1 = str1.toUpperCase();
        str2 = str2.toUpperCase();
        ArrayList<String> s1 = new ArrayList<>();
        ArrayList<String> s2 = new ArrayList<>();
        ArrayList<String> intersect = new ArrayList<>();
        ArrayList<String> union = new ArrayList<>();
        
        addString(str1,s1);
        addString(str2,s2);
        
        for(int i = 0; i < s1.size(); i++) {
            for(int j = 0; j < s2.size(); j++) {
                if(s1.get(i).equals(s2.get(j))) {
                    intersect.add(s1.get(i));
                    s2.remove(j);
                    break;
                }
            }
        }
        s1.clear();
        s2.clear();
        addString(str1,s1);
        addString(str2,s2);
        for(String s : s1) {
            union.add(s);
        }
        for(String s : s2) {
            union.add(s);
        }
        for(int i = 0; i < intersect.size(); i++) {
            union.remove(intersect.get(i));
        }
        if (intersect.size() == 0 && union.size() == 0) {
            return 65536;
        }
        double jac = (double)intersect.size() / union.size();
        System.out.print(jac);
        double res = jac * 65536;
        answer = (int)res;
        return answer;
    }
    void addString(String str, ArrayList<String> ss) {
        for(int i = 0; i < str.length()-1; i++) {
            String s = str.substring(i,i+2);
            boolean check = false;
            for(int j = 0; j < s.length(); j++) {
                if(s.charAt(j) >= 'A' && s.charAt(j) <= 'Z') {
                    check = true;
                }
                else {
                    check = false;
                    break;
                }
            }
            if(check) {
                ss.add(s);
            }
            
        }
    }
}