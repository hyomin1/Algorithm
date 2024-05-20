class Solution {
    
    int zero = 0;
    int one = 0;
    public int[] solution(int[][] arr) {
        
        quad(arr, 0, 0, arr.length);
        int[] answer = {zero, one};
        return answer;
    }
    void quad(int[][] arr, int x, int y, int size) {
        if(checkArr(arr, x, y, size)) {
            if(arr[x][y] == 0) zero++;
            else one++;
        }
        else {
            size /= 2;
            quad(arr, x, y, size);
            quad(arr, x+size, y, size);
            quad(arr, x, y+size, size);
            quad(arr, x+size, y+size, size);
        }   
    }
    boolean checkArr(int[][]arr , int x, int y, int size) {
        int n = arr[x][y];
        for(int i = x; i < x + size; i++) {
            for(int j = y; j < y + size; j++) {
                if(n != arr[i][j]) return false;
            }
        }
        return true;
    }
}