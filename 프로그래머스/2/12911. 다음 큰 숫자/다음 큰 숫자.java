class Solution {
    public int solution(int n) {
        int answer = 0;
        String s = Integer.toBinaryString(n);
        int nLen = 0;
        for(int i = 0; i < s.length(); i++) {
            if(s.charAt(i) == '1') {
                nLen++;
            }
        }
        for(int i = n+1; i <= 1000000; i++) {
            int cnt = 0;
            String str = Integer.toBinaryString(i);
            for(int j = 0; j < str.length(); j++) {
                if(str.charAt(j) == '1') {
                    cnt++;
                }
            }
            if(nLen == cnt) {
                answer = i;
                break;
            }
        }
        return answer;
    }
}