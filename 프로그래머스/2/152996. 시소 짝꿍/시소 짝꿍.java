import java.util.*;
class Solution {
    public long solution(int[] weights) {
        long answer = 0;
        HashMap<Double,Integer> map = new HashMap<>();
        Arrays.sort(weights);
        for(int i = 0; i < weights.length; i++) {
            double num = (double)weights[i];
            double a = num;
            double b = num / 2;
            double c = num * 2 / 3;
            double d = num * 3 / 4;
            if(map.containsKey(a)) answer += map.get(a);
            if(map.containsKey(b)) answer += map.get(b);
            if(map.containsKey(c)) answer += map.get(c);
            if(map.containsKey(d)) answer += map.get(d);
            map.put(num,map.getOrDefault(num,0)+1);
            
            
        }
        return answer;
    }
    int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a%b);
    }
}