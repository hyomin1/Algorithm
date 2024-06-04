import java.io.*;
import java.util.HashMap;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int answer = 0;
        for(int i = 0; i < N; i++) {
            String word = br.readLine();
            char[] c = word.toCharArray();
            if(isGroup(c)) answer++;
        }
        System.out.println(answer);

    }
    static boolean isGroup(char[] c) {
        boolean check = true;
        HashMap<Character,Integer> map = new HashMap<>();
        for(int i = 0; i < c.length;i ++) {
            map.put(c[i], map.getOrDefault(c[i],0) + 1);
            if(i > 0) {
                if(c[i-1] != c[i] && map.get(c[i]) > 1) {
                    check = false;
                }
            }
        }
        return check;


    }
}