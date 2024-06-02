import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Main {
    static int[] dx = {-1,1,0,0};
    static int[] dy = {0,0,-1,1};
    static int N;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        ArrayList<Integer>[] list = new ArrayList[N*N+1];
        for(int i = 1; i <= N*N; i++) {
            list[i] = new ArrayList<>();
        }
        int[][] seat = new int[N][N];
        int[] students = new int[N*N];
        for(int i = 0; i < N*N; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int student = Integer.parseInt(st.nextToken());
            students[i] = student;
            for(int j = 0; j < 4; j++) {
                list[student].add(Integer.parseInt(st.nextToken()));
            }
        }


        for(int i = 0; i < students.length; i++) {
            int student = students[i];
            placeStudent(seat,student,list[student]);
        }
        int satisfaction = total(seat,students, list);
        System.out.println(satisfaction);



    }
    static void placeStudent(int[][] seat, int student, ArrayList<Integer> list) {
        int size = seat.length;
        int maxFriend = -1;
        int maxEmpty = -1;
        int maxX = -1;
        int maxY = -1;
        for(int i = 0; i < seat.length; i++) {
            for(int j = 0; j < seat.length; j++) {
                if(seat[i][j] == 0) {
                    int friend = 0; // 인접한 친구수
                    int empty = 0; // 빈자리수

                    for(int k = 0; k < 4; k++) {
                        int x = i + dx[k];
                        int y = j + dy[k];
                        if(x >=0 && y >= 0 && x < size && y < size) {
                            if(seat[x][y] == 0) empty++; // 빈자리 개수 찾기
                            else if(list.contains(seat[x][y])) friend++;
                            // 인접한 칸의 좋아하는 친구 찾기
                        }
                    }
                    if(friend > maxFriend || (friend == maxFriend && empty > maxEmpty) ||
                            (friend == maxFriend && empty == maxEmpty && (
                                    i < maxX || (i == maxX && j < maxY)))) {
                        maxFriend = friend;
                        maxEmpty = empty;
                        maxX = i;
                        maxY = j;
                    }
                }
            }
        }
        seat[maxX][maxY] = student;
    }
    static int total(int[][] seat, int[] students, ArrayList<Integer>[] list) {
        int sum = 0;
        for(int i = 0; i < N; i++) {
            for(int j = 0; j < N; j++) {
                int student = seat[i][j];
                int friend = 0;
                for(int k = 0; k < 4; k++) {
                    int x = i + dx[k];
                    int y = j + dy[k];
                    if(x>=0 && y >=0 && x < N && y < N) {
                        if(list[student].contains(seat[x][y])) {
                            friend++; // 인접한 칸의 좋아하는 친구 수
                        }
                    }
                }
                if(friend > 0) {
                    sum += Math.pow(10,friend-1);
                }
            }

        }
        return sum;
    }

}