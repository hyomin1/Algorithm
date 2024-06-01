import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int num = Integer.parseInt(br.readLine());
        int[] switches = new int[num+1];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 1; i <= num; i++) {
            switches[i] = Integer.parseInt(st.nextToken());
        }
        int studentNum = Integer.parseInt(br.readLine());
        for(int i = 0; i < studentNum; i++) {
            st = new StringTokenizer(br.readLine());
            int gender = Integer.parseInt(st.nextToken());
            int switchNum = Integer.parseInt(st.nextToken());
            changeSwitch(gender, switchNum, switches);
        }
        for(int i = 1; i < switches.length; i++) {

            System.out.print(switches[i] + " ");
            if(i % 20 == 0) System.out.println();

        }

    }
    static void changeSwitch(int gender, int switchNum, int[] switches) {

        if(gender == 1) {
            int num = switchNum;
            int index = 2;
            while(num < switches.length) {
                if(switches[num] == 0) {
                    switches[num] = 1;
                }
                else {
                    switches[num] = 0;
                }
                num = switchNum * index;
                index++;
            }
        }
        else {
            int index = 0;
            while(switchNum - index - 1 > 0 && switchNum + index + 1 < switches.length) {
                if(switches[switchNum-index-1] == switches[switchNum+index+1]) {
                    index++;
                }
                else {
                    break;
                }

            }

            for(int i = switchNum - index; i <= switchNum+index; i++) {
                if(switches[i] == 1) switches[i] = 0;
                else switches[i] = 1;
            }



        }
    }
}