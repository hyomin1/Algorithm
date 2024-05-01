import java.util.*;
class Solution {
    public int solution(String[] friends, String[] gifts) {
        int answer = 0;
        int[][] giftList = new int[friends.length][friends.length];
        int[] giftPoint = new int[friends.length];
        HashMap<String,Integer> idMap = new HashMap<>();
        int[] nextGift = new int[friends.length];
        boolean[][] v = new boolean[friends.length][friends.length];
        for(int i = 0; i < friends.length; i++) {
            idMap.put(friends[i],i);
        }
        for(int i = 0; i < gifts.length; i++) {
            String[] str = gifts[i].split(" ");
            int giver = idMap.get(str[0]);
            int receiver = idMap.get(str[1]);
            giftList[giver][receiver]++;
        }
        
        for(int i = 0; i < giftList.length; i++) {
            int give = 0;
            int receive = 0;
            for(int j = 0; j < giftList.length; j++) {
                give += giftList[i][j];
                receive += giftList[j][i];
            }
            giftPoint[i] = give - receive;
        }
        for(int i = 0; i < giftList.length; i++) {
            for(int j = 0; j < giftList.length; j++) {
                if(i == j) continue;
                if(!v[i][j]) {
                    if(giftList[i][j] > giftList[j][i]) 
                        nextGift[i]++;
                    else if(giftList[i][j] < giftList[j][i]) 
                        nextGift[j]++;
                    else {
                        if(giftPoint[i] > giftPoint[j])
                            nextGift[i]++;
                        else if(giftPoint[i] < giftPoint[j])
                            nextGift[j]++;
                    }
                }
                v[i][j] = true;
                v[j][i] = true;
                
            }
        }
        
        Arrays.sort(nextGift);
        answer = nextGift[nextGift.length-1];
        
        
        return answer;
    }
}