import java.io.*;
import java.util.StringTokenizer;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String answer = "";
        int money1 = Integer.parseInt(br.readLine());
        int money2 = money1;
        StringTokenizer st = new StringTokenizer(br.readLine());
        int[] stocks = new int[14];
        for(int i = 0; i < stocks.length; i++) {
            stocks[i] = Integer.parseInt(st.nextToken());
        }
        int stock1 = 0;
        for(int i = 0; i < stocks.length; i++) {
            if (money1 >= stocks[i]) {
                int buy = money1 / stocks[i];
                stock1 += buy;
                money1 -= stocks[i] * buy;

            }
        }
        money1 += stock1 * stocks[13];
        int stock2 = 0;
        ArrayList<Integer> list = new ArrayList<>();
        for(int i = 3; i < stocks.length; i++) { //매수
            if(stocks[i-3] > stocks[i-2] &&
                    stocks[i-2] > stocks[i-1] &&
            stocks[i-1] > stocks[i]) {
                int buy = money2 / stocks[i];
                stock2 += buy;
                money2 -= stocks[i] * buy;
            }
            else if(stocks[i-3] < stocks[i-2] &&
                    stocks[i-2] < stocks[i-1] && stocks[i-1] < stocks[i]) {
                money2 += stock2 * stocks[i]; //매도
                stock2 = 0;
            }
        }
        money2 += stock2 * stocks[13];
        if(money1 > money2) {
            answer = "BNP";
        }
        else if(money1 < money2) {
            answer = "TIMING";
        }
        else {
            answer = "SAMESAME";
        }
        System.out.println(answer);



    }
}



