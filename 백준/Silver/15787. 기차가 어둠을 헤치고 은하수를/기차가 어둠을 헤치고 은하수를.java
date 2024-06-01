import java.io.*;
import java.util.*;

public class Main {
    static Map<Integer,String> map = new HashMap<>();
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        String seat = "00000000000000000000";
        for(int i = 1; i <= N; i++) {
            map.put(i,seat);
        }
        for(int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int cmd = Integer.parseInt(st.nextToken());
            int trainNum = Integer.parseInt(st.nextToken());
            if(cmd == 1 || cmd == 2) {
                int seatNum = Integer.parseInt(st.nextToken());
                changePerson(cmd, trainNum, seatNum);
            }
            else { // 3, 4
                movePerson(cmd, trainNum);
            }
        }
        Set<String> set = new HashSet<>();
        for(int i = 1; i <= N; i++) {
            set.add(map.get(i));
        }
        System.out.println(set.size());


    }
    static void changePerson(int cmd, int trainNum, int seatNum) {
        String seat = map.get(trainNum);
        char[] c = seat.toCharArray();
        for(int i = 0; i < c.length; i++) {
            if(cmd == 1) {
                c[seatNum-1] = '1';
            }
            else {
                c[seatNum-1] = '0';
            }
        }
        seat = String.valueOf(c);
        map.put(trainNum,seat);
    }
    static void movePerson(int cmd, int trainNum) {
        String seat = map.get(trainNum);
        char[] c = seat.toCharArray();
        if(cmd == 3) {
            for(int i = c.length-2; i >= 0; i--) {

                    c[i+1] = c[i];
                    c[i] = '0';

            }
        }
        else {
            for(int i = 1; i < c.length; i++) {
                c[i-1] = c[i];
                c[i] = '0';
            }

        }
        seat = String.valueOf(c);
        map.put(trainNum,seat);

    }
}