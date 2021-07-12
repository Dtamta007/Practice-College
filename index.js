console.log("hello");
console.log("ansh");
function clickMe(){
    var btn = document.querySelector('#hello h1');
    var val = btn.innerHTML;
    console.log("hello");
    console.log(btn);
    var num = parseInt(val)
    num = num+1;
    btn.innerHTML = num;
    console.log(num);
}
function clickss(){
    var btn = document.querySelector('#hello h1');
    var val=btn.innerHTML;
    val=parseInt(val);
    val--;
    console.log(val);
    console.log("hi");
    if(val>=0){
        btn.innerHTML=val;
    }
    
}