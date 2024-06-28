function solution(skill, skill_trees) {
    var answer = 0;
    for(let i = 0; i < skill_trees.length; i++) {
        let check = "";
        for(let j = 0; j < skill_trees[i].length; j++) {
            let c = skill_trees[i].charAt(j);
            if(skill.includes(c)) check += c;
        }
        if(skill.startsWith(check)) answer++;
    }
    return answer;
}