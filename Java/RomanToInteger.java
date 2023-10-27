
// Ques 2: Enter a Roman Number as input and convert it to an integer. (ex IX = 9)

import java.util.Scanner;

public class RomanToInteger{
    public static void main(String[] args){
        
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter a roman number: ");
        String st = sc.nextLine();        
        System.out.println("You entered:  "+st);
        
        int num = convertRomanToInt(st);
        System.out.println("Roman Number: "+num);
        sc.close();
    }

    public static int convertRomanToInt(String st){
        int n =0;

        for(int i=0; i<st.length(); i++){
            while(st.charAt(i)=='C'){
                n += 100;
                i++;
            }
            if(st.charAt(i)=='L'){
                n += 50;
            }
            if(i+1<st.length() && st.charAt(i)=='X' && st.charAt(i+1)=='C'){
                n += 90;
                i++;
            }
            if(i+1<st.length() && st.charAt(i)=='X' && st.charAt(i+1)=='L'){
                n += 40;
                i++;
            }
            while(i<st.length() &&st.charAt(i)=='X' ){
                n += 10;
                i++;
            }
            
            if(st.charAt(i)=='V'){
                n += 5;
            }
            if(i+1<st.length() && st.charAt(i)=='I' && st.charAt(i+1)=='X'){
                n += 9;
                i++;
            }
            if(i+1<st.length() && st.charAt(i)=='I' && st.charAt(i+1)=='V'){
                n += 4;
                i++;
            }
            while( i<st.length()  && st.charAt(i)=='I'){
                n += 1;
                i++;
            }
        }

        return n;
    }
}