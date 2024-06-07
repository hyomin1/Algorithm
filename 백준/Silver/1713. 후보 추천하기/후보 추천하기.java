import java.io.*;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());

        int size = Integer.parseInt(br.readLine()); // 총 추천 횟수

        int[] recommend = new int[size];
        StringTokenizer st = new StringTokenizer(br.readLine());
        for(int i = 0; i < size; i++) {
            recommend[i] = Integer.parseInt(st.nextToken());
        }
        HashMap<Integer, Integer> map = new HashMap<>();
        Queue<Integer> queue = new LinkedList<>();


        for(int i = 0; i < size; i++) {
            int number = recommend[i];
            if(map.containsKey(number)) {
                map.put(number,map.getOrDefault(number,0) + 1);
            }
            else {
                if(queue.size() >= N) { // 사진 틀 꽉 찬 경우
                    int minRecommend = 1001;
                    for(int key: map.keySet()) {
                        if(minRecommend > map.get(key)) {
                            minRecommend = map.get(key); // 가장 적은 추천 횟수
                        }
                    }
                    int delNum = 0;
                    for(int j : queue) {
                        if(map.get(j) == minRecommend) {
                            delNum = j;
                            break;
                        }
                    }
                    queue.remove(delNum);
                    map.remove(delNum);
                }
                queue.add(number);
                map.put(number,map.getOrDefault(number,0) + 1);
            }
        }
        int[] answer = new int[queue.size()];
        int index = 0;
        while(!queue.isEmpty()) {
            answer[index++] = queue.poll();
        }
        Arrays.sort(answer);
        for(int i : answer){
            System.out.print(i + " ");
        }

    }
}