import java.util.*;
class Solution {
    public int solution(String dartResult) {
        int answer = 0;
        int[] num = new int[3];
        int index = 0;
        String str = "";
        for(int i = 0; i < dartResult.length(); i++) {
            char c = dartResult.charAt(i);
            if(c >= '0' && c <= '9') { //다트 점수
                str += String.valueOf(c);
            }
            else if(c =='D' || c == 'S' || c == 'T') { //보너스
                int n = Integer.parseInt(str);
                switch(c) {
                    case 'D':
                        n = (int)Math.pow(n,2);
                        break;
                    case 'S':
                        n = (int)Math.pow(n,1);
                        break;
                    case 'T':
                        n = (int)Math.pow(n,3);
                        break;
                    default:
                        break;
                }
                num[index++] = n;
                str = "";
            } 
            else { // 옵션
                if(c == '*') {
                    if(index == 1) {
                        num[index-1] *= 2;
                    }
                    else {
                        num[index-1] *= 2;
                        num[index-2] *= 2;
                    }
                }
                else {
                    num[index-1] *= -1;
                }
                
            }
            
            
        }
        for(int n : num) {
            System.out.print(n + " ");
            answer += n;
        }
        
        return answer;
    }
}