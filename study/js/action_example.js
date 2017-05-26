
console.log(document.cookie + "\n");



var h_marquee = new Marquee(100, "horizontal", "red", "green", "A long text A long text A long text A long text A long text A long text");

var v_marquee = new Marquee(80, "vertical", "yellow", "blue", "Second copy second copy second copy second copy Second copy second copy second copy second copySecond copy second copy second copy second copySecond copy second copy second copy second copySecond copy second copy second copy second copySecond copy second copy second copy second copySecond copy second copy second copy second copy");

var text1 = new Textbox("200px", "15px", "cyan", "black", "write here...");

text1.marquee = h_marquee;

var first_time_visit = new Cookie();

//set method invoked without parameters
first_time_visit.set();

//set Another cookie with time limit different than default  
var second_cookie = new Cookie();

second_cookie.setCookie("Keep_authenticated_upto_2020", 786, "Sun, 12 Apr 2020 11:57:11 GMT");
console.log(100);