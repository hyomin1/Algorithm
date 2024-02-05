package baekjoon;

import java.io.*;
import java.util.StringTokenizer;

public class P11004 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int[] A = new int[N];

        st = new StringTokenizer(br.readLine());

        for(int i = 0; i<N;i++) {
            A[i] = Integer.parseInt(st.nextToken());
        }
        quickSort(A, 0, N-1, K-1); //정렬할 배열, start, end , k번째
        System.out.println(A[K-1]);

    }
    static void quickSort(int[] A, int start, int end, int K) {
        if(start < end) {
            int pivot = partition(A, start, end);
            if (pivot == K) {
                return ; // K번째 수가 pivot이면 구할 필요 없음
            }
            else if(K < pivot) {
                quickSort(A,start,pivot-1,K);
            }
            else {
                quickSort(A,pivot+1,end,K);
            }
        }
    }
    static int partition(int[] A , int start, int end) {
        if(start + 1 == end) { //데이터가 2개인 경우
            if (A[start] > A[end]) {
                swap(A,start,end);
            }
            return end;
        }
        int middle = (start+end) / 2; // 중앙값 피봇하기 위함
        swap(A,start,middle); //중앙값을 1번째 요소로 이동
        int pivot = A[start];
        int i = start + 1, j = end;
        while(i<=j) {
            while(j >= i && pivot < A[j]) {
                j--;
            }
            while (i <= j && pivot > A[i]) {
                i++;
            }
            if (i <= j) {
                swap(A, i++, j--);
            }
        }
        A[start] = A[j];
        A[j] = pivot;
        return j;
    }
    static void swap(int[] A , int start, int end) {
        int tmp = A[start];
        A[start] = A[end];
        A[end] = tmp;
    }
}
