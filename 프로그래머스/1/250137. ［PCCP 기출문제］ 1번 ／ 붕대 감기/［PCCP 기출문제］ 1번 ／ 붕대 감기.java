class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int answer = 0;
       
        int maxHealth = health;       
        for(int i = 0; i < attacks.length; i++) {
            
            
            if (i == 0) {
                health -= attacks[i][1];
            }
            else {
                int time = attacks[i][0] - attacks[i-1][0] -1;
             
                if(time == 0) {
                    health -= attacks[i][1];
                    continue;
                }
                health += time * bandage[1] + (time / bandage[0]) * bandage[2];
                if (health >= maxHealth) {
                    health = maxHealth;
                }
                health -= attacks[i][1];
            }
            if(health <= 0) {
                return -1;
            }
         
            
        }
    
        return health <= 0 ? -1 : health;
    }
}