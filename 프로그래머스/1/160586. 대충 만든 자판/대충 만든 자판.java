class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        for(int i = 0; i < targets.length; i++) {
            
            for(int j = 0; j < targets[i].length(); j++) {
                int min = 1000;
                char c = targets[i].charAt(j);
                for(int k = 0; k < keymap.length; k++) {
                    int index = keymap[k].indexOf(targets[i].charAt(j));
                    if (index != -1) {
                        min = Math.min(min, index);
                    }
                    
                }
                if(min == 1000) {
                answer[i] = -1;
                break;
            }
            else {
                answer[i] += min + 1;
            }
                
            }
            
            
        }
        return answer;
    }
}