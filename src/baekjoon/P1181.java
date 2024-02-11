package baekjoon;
import java.io.*;
import java.util.Arrays;

public class P1181 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[] A = new String[N];
        for(int i = 0; i<N;i++) {
            A[i] = br.readLine();
        }
        Arrays.sort(A,(a,b) -> {
            if(a.length() == b.length()) {
                return a.compareTo(b);
            }
            return a.length() - b.length();
        });
        for(int i = 0; i<N-1;i++) {
            if(A[i].equals(A[i+1])) {
                A[i] = "";
            }
        }
        for (String s : A) {
            if(!s.equals("")) {
                bw.write(s + "\n");
            }
        }
        bw.flush();
        bw.close();
    }
}
