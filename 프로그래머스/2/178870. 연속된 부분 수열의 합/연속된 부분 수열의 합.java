class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = new int[2];
        int s = 0, e = 0, sum = 0;
        int min = 1000000001;
        int len = sequence.length;
        while(s <= e) {
            if(sum < k) {
                if(e >= len) break;
                sum += sequence[e];
                e++;
            }
            else if (sum > k) {
                sum -= sequence[s];
                s++;
            }
            else {
                if (e - 1 - s < min) {
                    min = e - 1 - s;
                    answer[0] = s;
                    answer[1] = e - 1;
                }
                sum -= sequence[s];
                s++;
            }
            
            
        }
        System.out.print(s + " " + e);
        return answer;
    }
}