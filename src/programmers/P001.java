package programmers;

public class P001 {
    public static void main(String[] args) {
        System.out.println(solution("10203","15"));
    }
    static int solution(String t, String p) {
        int start = 0, end = p.length();
        int answer = 0;
        long num1 = Long.parseLong(p);//p의 길이가 18까지이기 때문에 int형으로 받을시 에러생길수 있다
        while(end <= t.length()) {
            String str = t.substring(start,end);
            long num2 = Long.parseLong(str);
            if (num1 >= num2) {
                answer++;
            }
            start++;
            end++;


        }

        return answer;
    }
}
