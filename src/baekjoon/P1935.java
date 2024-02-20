package baekjoon;
import java.io.*;
import java.util.Stack;

public class P1935 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String str = br.readLine();
        double[] A = new double[N];
        char[] c = str.toCharArray();
        for(int i = 0; i<N;i++) {
            A[i] = Double.parseDouble(br.readLine());
        }

        Stack<Double> stack = new Stack<>();
        for(int i = 0; i<c.length;i++) {
            if('A' <= c[i] && c[i] <= 'Z') {
                double d = A[c[i] - 'A'];
                stack.push(d);
            }
            else {
                double num2 = stack.pop();
                double num1 = stack.pop();
                switch (c[i]) {
                    case '*':
                        stack.push(num1*num2);
                        break;
                    case '+':
                        stack.push(num1 + num2);
                        break;
                    case '/':
                        stack.push(num1 / num2);
                        break;
                    case '-':
                        stack.push(num1 - num2);
                        break;
                }
            }

        }
        System.out.printf("%.2f",stack.pop());

    }
}
