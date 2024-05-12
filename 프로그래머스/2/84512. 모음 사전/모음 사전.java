import java.util.*;
class Solution {
    ArrayList<String> list;
    String[]  words = {"A","E","I","O","U"};
    public int solution(String word) {
        list= new ArrayList<>();
       
        
        dfs("",0);
        int answer = list.indexOf(word);
        return answer;
    }
    void dfs(String word, int depth) {
        list.add(word);
        if(depth == 5) return;
        for(int i = 0; i < 5; i++) {
            dfs(word+words[i],depth+1);
        }
    }
}