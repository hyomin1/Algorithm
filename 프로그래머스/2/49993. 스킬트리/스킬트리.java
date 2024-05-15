class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;
        String[] str = new String[skill_trees.length];
        for(int i = 0; i < skill_trees.length; i++) {
            str[i] = "";
            for(int j = 0; j < skill_trees[i].length(); j++) {
                for(int k = 0; k < skill.length(); k++) {
                    if(skill_trees[i].charAt(j) == skill.charAt(k)) {
                        str[i] += skill_trees[i].charAt(j);
                    }
                }
            }
        }
        for(String s: str) {
            if(skill.startsWith(s)) {
                answer++;
            }
        }
        return answer;
    }
}