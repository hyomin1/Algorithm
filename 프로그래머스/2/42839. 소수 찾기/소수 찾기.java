import java.util.*;
class Solution {
    int answer = 0;
    Set<Integer> set = new HashSet<>();
    public int solution(String numbers) {
        boolean[] used = new boolean[numbers.length()];
        for(int i = 0; i < numbers.length(); i++) {
            String s = numbers.charAt(i) + "";
            if(isPrime(s) && !set.contains(Integer.parseInt(s))) answer++;
            used[i] = true;
            set.add(Integer.parseInt(s));
            dfs(s,numbers, used);
            used[i] = false;
        }
        return answer;
    }
    void dfs(String str, String numbers, boolean[] used) {
        for(int i = 0; i < numbers.length(); i++) {
            if(!used[i]) {
                used[i] = true;
                String s = str + numbers.charAt(i);
                int n = Integer.parseInt(s);
                if(isPrime(s) && !set.contains(n)) answer++;
                set.add(n);
                dfs(s,numbers, used);
                used[i] = false;
            }
            
        }
        
    }
    boolean isPrime(String s) {
        int n = Integer.parseInt(s);
        System.out.println(n);
        if (n <= 1) return false;
        for(int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}