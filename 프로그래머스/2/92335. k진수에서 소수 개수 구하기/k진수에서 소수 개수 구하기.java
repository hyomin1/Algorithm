class Solution {
    
    public int solution(int n, int k) {
        int answer = 0;
        String s = "";
        String sNum = "";
        long nn = n;
        while(n != 0) {
            int num = (int)(n % k);
            n /= k;
            s += String.valueOf(num);
        }
        for(int i = s.length()-1; i >=0; i--) {
            sNum += s.charAt(i);
        }
        String[] str = sNum.split("0");
        for(String ss : str) {
            if(!ss.isEmpty()) {
                long num = Long.parseLong(ss);
                if(isPrime(num)) {
                    answer++;
                }
            }
            
        }
        return answer;
    }
    boolean isPrime(long n) {
        if(n <= 1) return false;
        for(long i = 2; i <=Math.sqrt(n); i++) {
            if(n%i == 0) {
                return false;
            }
        }
        return true;
    }
}