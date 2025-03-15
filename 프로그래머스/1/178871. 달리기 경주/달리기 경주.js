function solution(players, callings) {
    var answer = [];
    const rankMap = {};
    for (let i = 0; i < players.length; i++) {
        rankMap[players[i]] = i;
    }
    for (let i = 0; i < callings.length; i++) {
        const calledPlayer = callings[i];
        const index = rankMap[calledPlayer];
        
        let frontPlayer = players[index - 1];
        players[index - 1] = calledPlayer;
        players[index] = frontPlayer;
        
        rankMap[calledPlayer] = index - 1;
        rankMap[frontPlayer] = index;
        
    }
   return players;
    
}