
// Ques: Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

import java.util.Arrays;
import java.util.Random;

public class Shuffle {
    /**
     * @param args
     */
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        Random r = new Random();

        System.out.println("Before: " + Arrays.toString(arr));

        for(int i=arr.length-1; i>=0; i--){
            int idx = r.nextInt(0, i+1);

            int tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
        System.out.println("After shuffling: " + Arrays.toString(arr));
    }
}
