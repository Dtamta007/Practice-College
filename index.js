console.log("hello");
console.log("aryan");
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
function subtract(){
    var butt = document.querySelector('#hello h1');
    var val = butt.innerHTML;
    val = parseInt(val);
    if(val==0){
        return;
    }
    val = val - 1;
    butt.innerHTML = val;
    // console.log(val);
}