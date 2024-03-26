class Solution {
    public int[] solution(String[] park, String[] routes) {
        int sx = 0, sy = 0;
        for(int i = 0; i< park.length; i++) {
            for(int j = 0; j< park[i].length(); j++) {
                if(park[i].charAt(j) == 'S') {
                    sx = i;
                    sy = j;
                }
            }
        }
        // 북남 -> sx 동서 -> sy
        System.out.print(sx + " " +sy); // 시작 위치 좌표
        for(int i = 0; i < routes.length; i++) {
            String[] str = routes[i].split(" ");
            String direction = str[0];
            int move = Integer.parseInt(str[1]);
            if(direction.equals("E") && sy + move < park[0].length()) {
                boolean isGo = true;
                for(int j = sy + 1; j <= sy + move; j++) {
                    if(park[sx].charAt(j) == 'X') {
                        isGo = false;
                        break;
                    }
                }
                if(isGo) {
                    sy += move;
                }
               
               
            }
            else if(direction.equals("W") && sy - move >= 0) {
                boolean isGo = true;
                for(int j = sy - 1; j >= sy - move; j--) {
                    if(park[sx].charAt(j) == 'X') {
                        isGo = false;
                        break;
                    }
                }
                if(isGo) {
                    sy -= move;
                }
                
            }
            else if(direction.equals("S") && sx + move < park.length) {
                boolean isGo = true;
                for(int j = sx + 1; j <= sx + move; j++) {
                    if(park[j].charAt(sy) == 'X') {
                        isGo = false;
                        break;
                    }
                }
                if(isGo) {
                    sx += move;
                }
              
            }
            else if(direction.equals("N") && sx - move >= 0) {
                boolean isGo = true;
                for(int j = sx - 1; j >= sx - move; j--) {
                    if(park[j].charAt(sy) == 'X') {
                        isGo = false;
                        break;
                    }
                }
                if(isGo) {
                    sx -= move;
                }
             
            }
            
            
        }
        int[] answer = {sx, sy};
        return answer;
    }
}