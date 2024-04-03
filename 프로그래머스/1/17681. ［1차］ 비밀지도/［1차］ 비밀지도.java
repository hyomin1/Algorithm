class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        String[] answer = new String[n];
      
        for(int i = 0; i < n; i++) {
            long num = arr1[i] | arr2[i];
            String s = Long.toBinaryString(num);
            int zero = n - s.length();
            for(int j = 0; j < zero; j++) {
                s = '0' + s;
            }
            System.out.println(s);
            answer[i] = "";
            
            for(int j = 0; j < s.length(); j++) {
                if(s.charAt(j) == '1') {
                    answer[i] += "#";
                }
                else if(s.charAt(j) == '0'){
                    answer[i] += " ";
                }
            }
        }
        return answer;
    }
}