class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int carpet = brown + yellow;
        for(int i = 3; i <= carpet; i++) {
            int col = i;
            int row = carpet / i;
            if(row < 3) continue; //가로 3이상 이어야함
            if (row >= col && (row-2)*(col-2) == yellow) {
                answer[0] = row;
                answer[1] = col;
                break;
                
            }
        }
        return answer;
    }
}