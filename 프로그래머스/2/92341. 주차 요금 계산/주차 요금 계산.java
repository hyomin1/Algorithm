import java.util.*;
class Solution {
    public int[] solution(int[] fees, String[] records) {
        Map<Integer,Integer> feeMap = new HashMap<>();
        Map<Integer, Integer> timeMap = new HashMap<>();
        
        for(int i = 0; i < records.length; i++) {
            String[] info = records[i].split(" ");
            String[] times = info[0].split(":");
            int time = Integer.parseInt(times[0]) * 60 + Integer.parseInt(times[1]);
            int carNum = Integer.parseInt(info[1]);
            if(info[2].equals("IN")) {
                timeMap.put(carNum, timeMap.getOrDefault(carNum,0)-time);
            }
            else { //OUT
                timeMap.put(carNum, timeMap.get(carNum) + time);
            }
        }
        for(int key : timeMap.keySet()) {
            if(timeMap.get(key) <= 0) { // 출차 내역 없는차
                timeMap.put(key, timeMap.get(key)+23*60+59);
            }
        }
        for(int key : timeMap.keySet()) {
            int time = timeMap.get(key);
            if(time <= fees[0]) {
                feeMap.put(key,fees[1]);
            }
            else {
                double res = (double)(time-fees[0]) % fees[2];
                int plusFee = 0;
                if(res != 0.0) { // 초과시간 나누어 떨어지지 않는 경우
                    res = Math.ceil((double)(time-fees[0]) / fees[2]);
                    plusFee = (int)res * fees[3];               
                }
                else {
                     plusFee = (time - fees[0]) / fees[2] * fees[3];
                }
                int fee = fees[1] + plusFee;
                feeMap.put(key, fee);
            }
        }
        int[] sortedKey = new int[feeMap.size()];
        int[] answer = new int[feeMap.size()];
        int index = 0;
        for(int key : feeMap.keySet()) {
            sortedKey[index++] = key;
        }
        Arrays.sort(sortedKey);
        for(int i = 0; i < answer.length; i++) {
            answer[i] = feeMap.get(sortedKey[i]);
        }
        return answer;
    }
}