package baekjoon;

import java.io.*;
import java.util.*;

public class P10814 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[][] str = new String[N][2];
        for(int i = 0;i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            str[i][0] = st.nextToken();
            str[i][1] = st.nextToken();
        }
        Arrays.sort(str, (a,b) -> {
            if(a[0] == b[0]) {
                return 1; //양수 return 시 먼저 들어온 순 정렬 , 음수 면 반대
            }
            else {
                return Integer.parseInt(a[0]) - Integer.parseInt(b[0]);
            }
        });
        for (String[] strings : str) {
            bw.write(strings[0] +" " + strings[1] + "\n");
        }
        bw.flush();
        bw.close();
        
       
    }
}
