#include <iostream>
#include <vector>
using namespace std;


int main(){
    int testcase;
    cin>>testcase;
    while (testcase--)
    {
        int size_of_input,digit_sum=0,max_for_comparing;
        cin>>size_of_input;
        int arr[size_of_input];
        int sum[size_of_input];
        for(int i=0;i<size_of_input;i++){
            cin>>arr[i];
            digit_sum+=arr[i];
        }
        max_for_comparing=digit_sum;
        int index=size_of_input;
        for(int j=0;j<size_of_input;j++){
            if(j>0){
                arr[j] += arr[j - 1];
                }
            sum[j]=arr[j]+digit_sum;
            digit_sum-=arr[j];
            if(max_for_comparing>sum[j]){
            max_for_comparing=min(max_for_comparing,sum[j]);
            index=min(j,index);
            }
        }
        cout<<index<<"\n";
    }
    return 0;

}