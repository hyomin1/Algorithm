class Solution {
    public int solution(int[] arrayA, int[] arrayB) {
        int answer = 0;
        if(arrayA.length == 1 && arrayB.length == 1) {
            if(arrayA[0] == arrayB[0]) return 0;
            else return Math.max(arrayA[0],arrayB[0]);
        }
        int gcdA = gcd(arrayA[0], arrayA[1]);
        int gcdB = gcd(arrayB[0], arrayB[1]);
        for(int i = 2; i < arrayA.length; i++) {
            gcdA = gcd(gcdA, arrayA[i]);
            gcdB = gcd(gcdB, arrayB[i]);
        }
        boolean check1 = true;
        boolean check2 = true;
        for(int i = 0; i < arrayA.length; i++) {
            //철수가 가진 카드들에 모든 숫자 나눌수 있는지
            if(arrayA[i] % gcdB == 0) { 
                check1 = false;
                break;
            }
        }
        for(int i = 0; i < arrayB.length; i++) {
            //영희가 가진 카드 중 모든 숫자 나눌수 있는지
            if(arrayB[i] % gcdA == 0) {
                check2 = false;
            }
        }
        if(!check1 && !check2) return 0;
        else if(!check1 && check2) return gcdA;
        else if(check1 && !check2) return gcdB;
        else return Math.max(gcdA,gcdB);
        
    }
    int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a%b);
    }
}