import java.util.*;
class Solution {
    public String solution(String m, String[] musicinfos) {
        String answer = "(None)";
        int max = 0;
        m = changeMelody(m);
        for(int i = 0; i < musicinfos.length; i++) {
            String[] info = musicinfos[i].split(",");
            String[] t1 = info[0].split(":");
            String[] t2 = info[1].split(":");
            int time1 = Integer.parseInt(t1[0]) * 60 + Integer.parseInt(t1[1]);
            int time2 = Integer.parseInt(t2[0]) * 60 + Integer.parseInt(t2[1]);
            int duration = time2 - time1;
            String melody = changeMelody(info[3]);
            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < duration; j++) {
                sb.append(melody.charAt(j%melody.length()));
            }
            String newMelody = sb.toString();
            if(newMelody.contains(m) && max < duration) {
                max = duration;
                answer = info[2];                
            }
            
        }
        return answer;
    }
    String changeMelody(String melody) {
        melody = melody.replace("C#","c");
        melody = melody.replace("D#","d");
        melody = melody.replace("F#","f");
        melody = melody.replace("G#","g");
        melody = melody.replace("A#","a");
        melody = melody.replace("B#","b");
        return melody;
    }
}