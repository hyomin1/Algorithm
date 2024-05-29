import java.util.*;
class Solution {
    boolean[] visited;
    ArrayList<Integer>[] A;
    public int solution(int n, int[][] computers) {
        visited = new boolean[n+1];
        A = new ArrayList[n+1];
        for(int i = 1; i<n+1;i++) {
            A[i] = new ArrayList<Integer>();
        }
        for(int i = 0; i<computers.length; i++) {
            for(int j = 0; j<computers[i].length;j++) {
                if(computers[i][j] == 1) {
                    A[i+1].add(j+1);
                }
            }
        }
        int answer = 0;
        for(int i = 1; i<n+1;i++) {
            if(!visited[i]) {
                answer++;
                DFS(i);
            }
        }
        return answer;
    }
    void DFS(int v) {
        if(visited[v]) {
            return;
        }
        visited[v] = true;
        for(int i : A[v]) {
            if(!visited[i]) {
                DFS(i);
            }
        }
    }
}