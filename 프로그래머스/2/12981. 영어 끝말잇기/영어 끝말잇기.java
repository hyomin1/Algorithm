class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        for(int i = 1; i < words.length; i++) {
            if(words[i].charAt(0) != words[i-1].charAt(words[i-1].length()-1)) {    
                answer[0] = i % n + 1;
                answer[1] = i / n + 1;
                return answer;
            }
            for(int j = 0; j < i; j++) {
                if (words[i].equals(words[j])) {
                    answer[0] = i % n + 1;
                    answer[1] = i / n + 1;
                    return answer;
                }
            }
            
        }

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 

        return answer;
    }
}