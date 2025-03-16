function solution(bandage, health, attacks) {
    var answer = 0;
    const [duration, heal, bonusHeal] = bandage;
    const map = {};
    let lastTime = 0;
    for(let i = 0; i < attacks.length; i++) {
        const [attackTime, damage] = attacks[i];
         map[attackTime] = damage;
        if (i === attacks.length - 1) lastTime = attackTime;
    }
    let time = 0;
    let curHealth = health;
    for (let i = 1; i <= lastTime; i++) {
        time++;
        if (map[i]) { // 공격
            curHealth -= map[i];
            time = 0;
        } else curHealth += heal;
        if (time === duration) {
            curHealth += bonusHeal;
            time = 0;
        };
        if (curHealth > health) curHealth = health;
        if (curHealth <= 0) break;
        
    }
    
    return curHealth > 0 ? curHealth : -1;
    
}