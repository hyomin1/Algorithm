class Solution
{
    public int solution(int n, int a, int b)
    {
        int answer = 0;
        while(n != 1) {
            if (a % 2 == 0 && a == b + 1) {
                answer++;
                break;
            }
            if (b % 2 == 0 && b == a + 1) {
                answer++;
                break;
            }
            a = (a+1) / 2;
            b = (b+1) / 2;
            answer++;
            n /= 2;
        }

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

        return answer;
    }
}