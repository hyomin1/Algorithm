class Solution {
    public int solution(int n) {
        int answer = 0;
        int nLen = Integer.bitCount(n);
        for(int i = n+1 ; i <= 1000000; i++) {
            int bigLen = Integer.bitCount(i);
            if(nLen == bigLen) {
                answer = i;
                break;
            }
        }
        
        return answer;
    }
}