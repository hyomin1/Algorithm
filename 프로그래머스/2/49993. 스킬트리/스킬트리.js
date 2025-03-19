function solution(skill, skill_trees) {
    let answer = 0;
    
    skill_trees = skill_trees.filter((s) => {
        const filterTree = s.split('').filter((v)=>skill.includes(v)).join('');
        return skill.startsWith(filterTree);
    });
    answer = skill_trees.length;    
    
    return answer;
}