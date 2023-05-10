import java.util.*;

public class Prac1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int sum = 0;

        String s = sc.next();

        int nList[] = new int[n];
        for(int i=0;i<n;i++) {
            nList[i] = s.charAt(i) - '0';  //문자 0의 아스키 코드값 48을 빼준다
            sum += nList[i];
        }
        System.out.println(sum);













    }
}
