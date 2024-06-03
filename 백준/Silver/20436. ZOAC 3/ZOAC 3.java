import java.io.*;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        String s1 = st.nextToken();
        String s2 = st.nextToken();
        char left = s1.charAt(0);
        char right = s2.charAt(0);
        int answer = 0;
        char[][] keyboard = {
                {'q','w','e','r','t','y','u','i','o','p'},
                {'a','s','d','f','g','h','j','k','l'},
                {'z','x','c','v','b','n','m'}
        };
        char[] c = br.readLine().toCharArray();
        int l = 0, r = 0;
        int x1 = 0, x2 = 0, y1 = 0, y2 = 0;
        for(int i = 0; i < c.length; i++) {
            char key = c[i];
            for(int j = 0; j < keyboard.length; j++) {
                for(int k = 0; k < keyboard[j].length; k++) {
                    if(keyboard[j][k] == c[i]) { //z
                        l = j; //입력해야할 키의 위치
                        r = k;
                    }
                    if(keyboard[j][k] == left) { //왼손 위치
                        x1 = j;
                        y1 = k;
                    }
                    if(keyboard[j][k] == right) { // 오른손 위치
                        x2 = j;
                        y2 = k;
                    }
                }
            }
            int len = 0;
            if(c[i] =='y' || c[i] =='u' || c[i] =='i' || c[i] == 'o'
            || c[i] =='p' || c[i] =='h' || c[i] =='j' || c[i] =='k'
            || c[i] =='l' || c[i] == 'b' || c[i] == 'n' || c[i] == 'm') {
                len = Math.abs(x2-l) + Math.abs(y2-r);
                right = c[i];
            }
            else {
                len = Math.abs(x1-l) + Math.abs(y1-r);
                left = c[i];
            }
            answer += 1 + len;


        }
        System.out.println(answer);
    }
}