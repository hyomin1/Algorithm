class Solution {
    public int solution(String[] babbling) {
        int answer = 0;
        String[] strs = {"aya", "ye", "woo", "ma"};
        String[] str = {"ayaaya", "yeye", "woowoo", "mama"};
        for(int i = 0; i < babbling.length; i++) {
            for(int j = 0; j < str.length; j++) {
                if(!babbling[i].contains(str[j])) {
                    babbling[i] = babbling[i].replace(strs[j], " ");
                }
                
            }
            if(babbling[i].trim().length() == 0) {
                answer++;
            }
            
        }
        return answer;
    }
}