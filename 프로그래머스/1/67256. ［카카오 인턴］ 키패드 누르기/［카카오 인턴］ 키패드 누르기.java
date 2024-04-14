class Solution {
    public String solution(int[] numbers, String hand) {
        int[][] keyPad ={{1, 2, 3}, {4, 5, 6}, {7, 8, 9} , {-1, 0 ,-1}};
        int[] left = {3, 0};
        int[] right = {3, 2};
        String answer = "";
        for(int i = 0; i < numbers.length; i++) {
           for(int j = 0; j < keyPad.length; j++) {
               for(int k = 0; k < keyPad[j].length; k++) {
                   if(numbers[i] == keyPad[j][k]) {
                       if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
                       answer+="L";
                       left[0] = j;
                       left[1] = k;
                   }
                       else if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
                       answer += "R";
                       right[0] = j;
                       right[1] = k;
                   }
                        else {
                            int x1 = Math.abs(j - left[0]);
                            int x2 = Math.abs(j - right[0]);
                            int y1 = Math.abs(k - left[1]);
                            int y2 = Math.abs(k - right[1]);
                            if(x1 + y1 < x2 + y2) {
                                answer += "L";
                                left[0] = j;
                                left[1] = k;
                            }
                            else if(x1 + y1 == x2 + y2) {
                                if(hand.equals("right")) {
                                    answer+= "R";
                                    right[0] = j;
                                    right[1] = k;
                                }
                                else {
                                    answer += "L";
                                    left[0] = j;
                                    left[1] = k;
                                }
                            }
                            else {
                                answer += "R";
                                right[0] = j;
                                right[1] = k;
                            }
                    
                   }
                 }
                   
                   
                  
               }
           }
        }
        return answer;
    }
}