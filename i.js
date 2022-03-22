document.getElementById("hi").style.display="none";
function f() {
    document.getElementById("hi").style.display="block";
}
var name = document.getElementById("name").innerHTML;
    var member = document.getElementById("me").innerHTML;
function f2() {
    document.getElementById("me").innerHTML  = document.getElementById("name").innerHTML;
}