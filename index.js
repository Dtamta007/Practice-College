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