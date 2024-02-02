package baekjoon;

import java.util.Scanner;

public class Prac7 {
    static int []s;
    static int top;
    static int n;
    static int i;
    static boolean check = true;
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        int[] A = new int[n];
        s= new int[n];
        for(int i =0;i<n;i++){
            A[i]= sc.nextInt();
        }
        int i =1,cnt=0;
        top=-1;

        StringBuffer bf = new StringBuffer();

        while (cnt<n) {
            if(check==false)
                break;
            if(top >=0 && s[top] == A[cnt]) {
                bf.append("-\n");
                pop();
                cnt++;
            }
            else {
                bf.append("+\n");
                push(i);
                i++;
            }
        }
        if (check==true) {
            System.out.println(bf);

        }
        else{
            System.out.println("NO");
        }

    }
    static void push(int i) {
        if(top + 1 == n) {
            check=false;
            return;
        }

        s[top+1] = i;
        top++;

    }
    static void pop() {
        if(top-1<0) {
            return;
        }

        int tmp = s[top];
        top--;

    }
}