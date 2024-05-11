class Solution {
    int answer = 0;
    boolean[] visited;
    public int solution(int k, int[][] dungeons) {
       visited = new boolean[dungeons.length];
        
        dfs(k,0,dungeons);
        return answer;
        
        
    }
    void dfs(int k, int depth, int[][] dungeons) {
        for(int i = 0; i < dungeons.length;i++) {
            if(!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                dfs(k - dungeons[i][1], depth+1, dungeons);
                visited[i] = false;
            }
        }
        answer = Math.max(answer,depth);
    }
    
    
}