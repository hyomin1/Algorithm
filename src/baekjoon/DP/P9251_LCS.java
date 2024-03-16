package baekjoon.DP;
import java.io.*;

public class P9251_LCS {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String str1 = br.readLine();
        String str2 = br.readLine();

        int[][] D = new int[str1.length()+1][str2.length()+1];

        for(int i = 1; i <= D.length - 1; i++) {
            for(int j = 1; j <= D[i].length-1; j++) {
                if(str1.charAt(i-1) == str2.charAt(j-1)) {
                    D[i][j] = D[i-1][j-1] + 1;
                }
                else {
                    D[i][j] = Math.max(D[i-1][j], D[i][j-1]);
                }
            }
        }
        bw.write(D[str1.length()][str2.length()] + "\n");
        bw.flush();
        bw.close();



    }
}
