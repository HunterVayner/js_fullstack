let enc_qq = [6,3,1,7,5,8,9,2,4],
    qq = []; //真正的QQ
    head = 0;   //队首指针 要移除的元素位置
    tail = 9;   //队尾指针 要加入的元素位置
//第一个数移除
    while(head < tail){
    qq.push(enc_qq[head]);
    head++;
    enc_qq[enc_qq.length] = enc_qq[head];
    tail++;
    head++;
}
    //enc_qq.shift;
    console.log(typeof qq);
//enc_qq.push(0);     //末尾插入
//enc_qq.pop();     首尾删除
//enc_qq.unshift(0);  //插入
//enc_qq.shift(); //删除数组第一个元素
//console.log(enc_qq);
//数组是最廉价的数据结构
//console.log(enc_qq.length, enc_qq[0]);