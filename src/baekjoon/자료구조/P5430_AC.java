package baekjoon.자료구조;
import java.io.*;
import java.util.*;
public class P5430_AC {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());
        for(int i = 0; i<T;i++) {
            String p = br.readLine(); //수행할 함수
            int n = Integer.parseInt(br.readLine()); // 배열크기
            String str = br.readLine();

            str = str.substring(1, str.length() - 1);
            LinkedList<Integer> deque = new LinkedList<>();
            StringTokenizer st = new StringTokenizer(str, ","); //문자열 분리

            for (int j = 0; j < n; j++) {
                deque.add(Integer.parseInt(st.nextToken()));
            }
            boolean err = false;
            boolean reverse = false;
            for (int k = 0; k<p.length();k++) {
                if(p.charAt(k) == 'R') {
                    reverse = !reverse;
                }
                else {
                    if(deque.isEmpty()) {
                        err = true;
                        break;
                    }
                    if(reverse) {
                        deque.pollLast();
                    }
                    else {
                        deque.pollFirst();
                    }
                }
            }
            if(err) {
                bw.write("error\n");
            }
            else {
                bw.write("[");
                if(!deque.isEmpty()) {
                    if(reverse) {
                        bw.write(deque.pollLast()+"");
                        while (!deque.isEmpty()) {
                            bw.write("," + deque.pollLast());
                        }
                    }
                    else {
                        bw.write(deque.pollFirst()+"");
                        while(!deque.isEmpty()) {
                            bw.write("," + deque.pollFirst());
                        }
                    }
                }
                bw.write("]\n");
            }
        }
        bw.flush();
        bw.close();






    }
}
