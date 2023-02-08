import java.util.Arrays;

public class demo {
    public static void main(String[] args) {
        int[]arr={0,1,0,3,12};
        for (int i = 0; i < arr.length-1;i++) {
            if(arr[i]==0&&arr[i+1]!=0){
                arr[i]=arr[i+1];
                arr[i+1]=0;
                i--;
            }
        }
//        for (int i = 0; i < arr.length;i++) {
//            for (int j = 0; j <=i ; j++) {
//                if (arr[j]==0){
//                    arr[j]=arr[i];
//                    arr[i]=0;
//                }
//            }
//        }
        System.out.println(Arrays.toString(arr));

    }
}
