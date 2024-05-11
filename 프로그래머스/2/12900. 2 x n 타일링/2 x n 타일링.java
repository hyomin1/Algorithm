class Solution {
    public int solution(int n) {
        long[] D = new long[60001];
        D[1] = 1;
        D[2] = 2;
        for(int i = 3; i <= n; i++) {
            D[i] = (D[i-1] + D[i-2]) % 1000000007;
        }
        int answer = (int)D[n];
        return answer;
    }
}