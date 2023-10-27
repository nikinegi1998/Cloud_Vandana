

// Ques 3: Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)

import java.util.*;

public class Pangram{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter any sentence: ");
        String st = sc.nextLine();

        boolean status = checkPanagram(st);
        if(status)
            System.out.println("Sentence is a Panagram. ");
        else    
            System.out.println("Sentence is not a Panagram. ");

        sc.close();
    }

    public static boolean checkPanagram(String st){
        Set<Character> h = new HashSet<>();
        st = st.toLowerCase();

        for(int i =0; i<st.length(); i++){
            if(Character.isLetter(st.charAt(i)))
                h.add(st.charAt(i));
        }

        return h.size()==26;
    }
}