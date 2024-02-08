package baekjoon;
import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class P10825 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine());
        String[][] students = new String[N][4];

        for(int i = 0; i<N;i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            students[i][0] = st.nextToken(); //이름
            students[i][1] = st.nextToken(); //국어점수
            students[i][2] = st.nextToken(); // 영어점수
            students[i][3] = st.nextToken(); // 수학점수
        }
        Arrays.sort(students, (a,b) -> {
            if(a[1].equals(b[1])) { //점수 string으로 바꿔서 equals로
                if(a[2].equals(b[2])) {
                    if(a[3].equals(b[3])) {
                        return a[0].compareTo(b[0]);
                    }
                    return Integer.parseInt(b[3]) - Integer.parseInt(a[3]);
                }
                return Integer.parseInt(a[2]) - Integer.parseInt(b[2]);
            }
            else {
                return Integer.parseInt(b[1]) - Integer.parseInt(a[1]); //국어 점수 감소
            }
        });
        for(int i = 0; i<N;i++) {
            bw.write(students[i][0] + "\n");
        }
        bw.flush();
        bw.close();
    }
}
