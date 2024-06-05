import java.io.*;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        int[] A = new int[N];
        for(int i = 0; i < N ; i++) {
            A[i] = i+1;
        }
        while(A.length > 1) {
            A = erase(A);
        }
        System.out.println(A[0]);

    }
    static int[] erase(int[] A) {
        ArrayList<Integer> list = new ArrayList<>();
        for(int i = 0; i < A.length; i++) {
            if(i % 2 != 0) {
                list.add(A[i]);
            }
        }
        int[] newArr = new int[list.size()];
        for(int i = 0; i < list.size(); i++) {
            newArr[i] = list.get(i);
        }

        return newArr;


    }
}