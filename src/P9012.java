import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class P9012 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine());

        for(int i = 0; i<T;i++) {
            char[] c = br.readLine().toCharArray();
            Stack<Character> stack = new Stack<>();
            for(int j = 0; j<c.length;j++) {
                stack.push(c[j]);
                if(stack.size()>=2) {
                    char c1 = stack.pop();
                    char c2 = stack.pop();
                    if(c1==c2) {
                        stack.push(c2);
                        stack.push(c1);
                    }
                    else if(c2==')' && c1 =='(') {
                        stack.push(c2);
                        stack.push(c1);
                    }
                }
            }
            if(stack.isEmpty()) {
                System.out.println("YES");
            }
            else {
                System.out.println("NO");
            }
        }
    }
}
