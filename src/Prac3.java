import java.util.*;
import java.io.*;

public class Prac3 {
    public static  void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n, m;
        n = sc.nextInt(); //수의 개수
        m = sc.nextInt(); // 합을 구해야 하는 횟수

        int a[] = new int[n];
        int s[] = new int[n];

        for(int k=0;k<n;k++) {
            a[k] = sc.nextInt();
        }

        for (int k=0;k<n;k++) {
            if(k == 0)
                s[k] = a[k];
            else
                s[k] = s[k-1] + a[k];
        }

        int i,j;
        for(int k=0;k<m;k++) {
            i = sc.nextInt();
            j = sc.nextInt();
            if (i==1)
                System.out.println(s[j-1]);
            else
                System.out.println(s[j-1]-s[i-2]);

        }


    }
}
