class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        int[] div = new int[number];
        int idx = 0;
        for(int i = 1; i <= number; i++) {
            int count = 0;
            int sqrt_i = (int) Math.sqrt(i);
            for(int j = 1; j <= sqrt_i; j++) {
                if(i % j == 0) {
                    count+= 2;
                }
            }
            if (sqrt_i * sqrt_i == i) {
                count--; // 1, 4, 9 ... 제곱수 중복 약수 제거
            }
            div[idx++] = count;
        }
      
        for(int i = 0; i < number; i++) {
            if(div[i] > limit) {
                div[i] = power;
            }
        }
    
        for(int i : div) {
            answer += i;
        }
        return answer;
    }
}