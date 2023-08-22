import java.util.Scanner;
public class array {
    public static void main(String[] args) {
        Scanner inp=new Scanner(System.in);
        int arr[]=new int[5];
        /*arr[0]=56;
        arr[1]=34;
        arr[2]=25;
        arr[3]=33;
        arr[4]=48;*/
        for(int i=0;i<arr.length;i++){
            arr[i]=inp.nextInt();
        }
        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
    }
    
}
