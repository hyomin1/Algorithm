package baekjoon.자료구조;

import java.io.*;
import java.util.*;

public class P10799_쇠막대기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int answer = 0;
        Stack<Character> stack = new Stack<>();
        String str = br.readLine();
        char[] c = str.toCharArray();
        for(int i = 0; i<c.length;i++) {
            if(c[i] == '(') {
                stack.push(c[i]);
            }
            else {
                stack.pop();
                if(c[i-1] == '(') {
                    //System.out.print(stack.size() + " ");
                    answer += stack.size();
                }
                else {
                    //System.out.print(1 + " ");
                    answer++;
                }
            }
        }
        bw.write(answer + "\n");
        bw.flush();
        bw.close();
    }
}
