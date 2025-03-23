function solution(n)
{
    var answer = 0;
    n = n.toString();
    
    const arr = n.split('');
    answer = arr.reduce((sum,cur) => sum + parseInt(cur),0);

    return answer;
}