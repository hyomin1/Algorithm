class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        
        while(n >= a) {
            int plusCola = (n / a) * b;
            int emptyGlass = n % a;
            n = plusCola + emptyGlass;
            answer += plusCola;
        }
        return answer;
    }
}