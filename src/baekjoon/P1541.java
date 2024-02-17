package baekjoon;
import java.util.*;
import java.io.*;

public class P1541 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String s = br.readLine();
        String[] str = s.split("-");
        int answer = 0;
        for(int i = 0; i<str.length;i++) {
            int num = toSum(str[i]);
            if(i == 0) {
                answer += num;
            }
            else {
                answer -=num;
            }
        }
        bw.write(answer +"\n");
        bw.flush();
        bw.close();





    }
    static int toSum(String s) {
        int sum = 0;
        String[] str = s.split("[+]");
        for(int i = 0; i<str.length;i++) {
            sum += Integer.parseInt(str[i]);
        }
        return sum;


    }
}
