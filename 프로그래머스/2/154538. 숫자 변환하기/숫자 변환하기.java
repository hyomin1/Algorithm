class Solution {
    public int solution(int x, int y, int n) {
        int answer = 0;
        int[] D = new int[y+1];
        for(int i = 1; i <= y; i++) {
            D[i] = 1000001;
        }
        D[x] = 0;
        for(int i = x ; i <= y; i ++) {
            if(i+n <= y){
                 D[i+n] = Math.min(D[i+n], D[i]+1);
            }
            if(i * 2 <= y) {
               D[i*2] = Math.min(D[i*2],D[i]+1);
            }
            if(i*3 <= y) {
                D[i*3] = Math.min(D[i*3],D[i]+1);
            }
        }
        answer = D[y];
        if(D[y] == 1000001) return -1;
        return answer;
    }
}