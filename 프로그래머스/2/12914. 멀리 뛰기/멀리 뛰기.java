class Solution {
    public long solution(int n) {
        long answer = 0;
        int[] D = new int[n+1];
        if (n == 1) return 1;
        D[1] = 1;
        D[2] = 2;
        for(int i = 3 ; i <= n; i++) {
            D[i] = (D[i-1] + D[i-2]) % 1234567;
        }
        answer = D[n];
        return answer;
    }
}