import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

    /*
     * Complete the 'gradingStudents' function below.
     *
     * The function is expected to return an INTEGER_ARRAY.
     * The function accepts INTEGER_ARRAY grades as parameter.
     */

    public static List<Integer> gradingStudents(List<Integer> grades) {
         List<Integer> gradesRounded = new ArrayList<>();
      
         int denom;
         for (int i = 0; i < grades.size(); i++) {
            int val = grades.get(i);
            if (val<38){ gradesRounded.add(i,val); continue;}
            denom = val%5;
            if(denom > 2){
                val= val +(5-denom);
                gradesRounded.add(i,val);
                continue;
            }
            gradesRounded.add(i,val);
        }
        return gradesRounded;

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int gradesCount = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> grades = new ArrayList<>();

        for (int i = 0; i < gradesCount; i++) {
            int gradesItem = Integer.parseInt(bufferedReader.readLine().trim());
            grades.add(gradesItem);
        }

        List<Integer> result = Result.gradingStudents(grades);

        for (int i = 0; i < result.size(); i++) {
            bufferedWriter.write(String.valueOf(result.get(i)));

            if (i != result.size() - 1) {
                bufferedWriter.write("\n");
            }
        }

        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
