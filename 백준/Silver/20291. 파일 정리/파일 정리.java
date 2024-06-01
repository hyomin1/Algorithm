import java.io.*;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        Map<String, Integer> map = new HashMap<>();

        for(int i = 0; i < N; i++) {
            String files = br.readLine();
            String[] file = files.split("\\.");
            map.put(file[1], map.getOrDefault(file[1], 0) + 1);
        }
        String[] sortFile = new String[map.size()];
        int index = 0;
        for(String key: map.keySet()) {
            sortFile[index++] = key;
        }
        Arrays.sort(sortFile);
        for(int i = 0; i < sortFile.length; i++) {
            System.out.println(sortFile[i] + " " + map.get(sortFile[i]));
        }


    }
}