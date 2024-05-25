import java.util.*;
class Solution {
    ArrayList<Integer>[] list;
    boolean[] visited;
   
    public int solution(int n, int[][] wires) {
        int answer = 101;
       
        list = new ArrayList[n+1];
        
        for(int i = 1; i <=n; i++) {
            list[i] = new ArrayList<>();
        }
        for(int i = 0; i < wires.length; i++) {
            int u = wires[i][0];
            int v = wires[i][1];
            list[u].add(v);
            list[v].add(u);
        }
        for(int i = 0; i < wires.length; i++) {
            visited = new boolean[n+1];
            int u = wires[i][0];
            int v = wires[i][1];
            list[u].remove((Integer) v);  
            list[v].remove((Integer) u);
            int[] size = new int[2];
            int index = 0;
            for(int j = 1; j <=n; j++) {
                if(!visited[j]) {
                    size[index++] = dfs(j); 
                }
            }
            answer = Math.min(answer,Math.abs(size[1]-size[0]));
            list[u].add(v);
            list[v].add(u);
            
        }
        
        return answer;
    }
    int dfs(int v) {
        int count = 0;
        visited[v] = true;
        for(int i : list[v]) {
            if(!visited[i]) {
                visited[i] = true;
                count += dfs(i);
                count++;
            }
        }
    return count;
    }
}