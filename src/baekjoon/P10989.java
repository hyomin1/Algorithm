package baekjoon;

import java.io.*;

public class P10989 {
    public static void main(String[] args) throws IOException {
        //퀵정렬로 해보기
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] A = new int[N];
        for(int i = 0;i<N;i++) {
            A[i] = Integer.parseInt(br.readLine());
        }

        quick_sort(A,0,N-1);
        for (int i : A) {
            bw.write(i + "\n"); // 개행문자 추가해 문자열로 변환
        }
        bw.flush();
        bw.close();
    }
    static void quick_sort(int[] A, int S, int E) {
        if(S < E) {
            int pivot = partition(A,S,E);
            quick_sort(A,S,pivot-1);
            quick_sort(A,pivot+1,E);
        }

    }
    static int partition(int[] A, int S, int E) {
        int M = (S+E) / 2;
        int pivot = A[M]; //피벗 중간값을 설정
        swap(A,M,E);// 중간 값과 끝 값 교체 (설정한 중간값을 맨끝으로 보내 비교)
        int i = S , j = E - 1;
        while(i<=j) {
            while(i<=j && pivot > A[i]) {
                i++;
            }
            while(i<=j && pivot < A[j]) {
                j--;
            }
            if(i<=j) {
                swap(A,i,j);
                i++;
                j--;
            }
        }
        swap(A,i,E);
        return i;

    }
    static void swap(int[] A, int i, int j) {
        int tmp = A[i];
        A[i] = A[j];
        A[j] = tmp;
    }
}
