#include<bits/stdc++.h>
using namespace std;
int main(){
    queue<int>q;
    for(int i=4;i<=10;i++)
        q.push(i);
    while(!q.empty()){
        cout<<q.front()<<endl;
        q.pop();
        cout<<"s="<<q.front()<<endl;
    }

    return 0;
}
