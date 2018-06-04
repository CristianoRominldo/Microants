//Make achoice between yes or no
/*function Alert(){
  if(confirm("You want to die?")){
      alert("You make a bad choice!")
  }
  else {
    alert("You make a good choice!")
  }
}
*/



//input something and run different  Answer
/*function Alert(){
  var Answer = prompt("Are you sure you want to do that?","");
  if(Answer){
    alert("You said:" + Answer);
  }
  else{
    alert("You don't want to answer my question");
  }
}
*/

//click the link to load another website whose name is different from the address that wrote on  page
/*window.onload = click;

function click(){
  document.getElementById("run").onclick = redirect;
}
function redirect(){
  window.location = "http://www.sina.com";
  return false;
}*/


//alert the user we are not responsible for content of pages outer our website
/*
window.onload = reminder;

function reminder(){
  document.getElementById("run").onclick = reminder1;
}
function reminder1(){
  alert("We are not responsible for content of pages outside our site");
}
*/

/*function change(){
  var a = document.getElementById("constant_line2_1_input_input").value;
  document.getElementById("constant_line2_1_word").innerHTML = a ;
}
*/




//editer frame

/*var b;

function edit(){
  var a = document.getElementById("constant_line2_1_test_test");
  b = a;
  a.onmouseover = edit2;
  a.onclick = edit4;
  a.onmouseout =  edit3;
  //alert(a);
  //alert(b);
}

function edit2(){
  b.className = "test1";
}

function edit3(){
  b.className = "test";
}

function edit4(){
  b.className = "test1 test1_1";

}
*/


//switch sentence
/*

window.onload = choose ;

function choose(){
  document.getElementById("constant_line2_1_test_button_1").onclick = alarm;
  document.getElementById("constant_line2_1_test_button_2").onclick = alarm;
  document.getElementById("constant_line2_1_test_button_3").onclick = alarm;
  document.getElementById("constant_line2_1_test_button_4").onclick = alarm;
}

function alarm(){
  a = document.getElementById("constant_line2_1_test_button_1").innerHTML;
  b = document.getElementById("constant_line2_1_test_button_2").innerHTML;
  c = document.getElementById("constant_line2_1_test_button_3").innerHTML;
  switch (this.id) {
    case "constant_line2_1_test_button_1":
      alert("your choice" + " is " + a);
          break;
    case "constant_line2_1_test_button_2":
      alert("your choice" + " is " + b);
          break;
    case "constant_line2_1_test_button_3":
      alert("your choice" + " is " + c);
          break;

    default:
      alert("please make your choice!!!");
        break;

  }
}

*/



//counrt_caculate_square;
/*
window.onload = checklist1;


function checklist1(){
  document.getElementById("constant_line4_1_button").onclick = checklist2;
}
function checklist2(){
  var a = document.getElementById("constant_line4_1_import").innerHTML;
  try{
    if (!a || isNaN(a) || a<0) {
      throw new Error("Not a valid number");
    }
    else{
      alert("The square root of " + a + " is " + Math.sqrt(a));
  }
}
  catch (errMsg){
    alert(errMsg.message);
  }
}
*/

/* window.onload = run;

var Luoming = new Array(9);
var Num;

function run(){
  for(var i=0;i<10; i++){

    do{
     Num = Math.floor(Math.random()*9)+1;
  }

  while (Luoming[Num]);

      Luoming[Num] = true;

    if(document.getElementById("t" + i)){
      document.getElementById("t" + i).innerHTML = Num;

    }

  }
}

var newcars = new Array("L","M","X");
 */



window.onload = rolling;

function rolling(){
  roll();
  roll2();
  preclick();
  nextclick();
  jump();
  onebyone();
  check();
}

  var container = new Array("../timg.jpg" , "../Totoro.jpg" );
  var picture = 1;

function roll(){
  picture++;
  a = picture -1;
  if(picture == container.length){
    picture = 0;
  }
  document.getElementById("constant_line5_1_roller_img").src = container[a];
  setTimeout(roll , 3000);
}


var imgcontainer = new Array("../timg.jpg","../background_foot.png");
var linkcontainer = new Array("http://www.baidu.com","http://www.sina.com");
var imgcar = -1;

function roll2(){
  imgcar++;
  if(imgcar == imgcontainer.length){
  imgcar = 0;
}
  document.getElementById("constant_line7_1_roller_img").src = imgcontainer[imgcar];
  document.getElementById("constant_line7_1_roller_link").href = linkcontainer[imgcar];
  setTimeout(roll2,3000);
}

var piccontainer = new Array("../WechatIMG110.jpeg","../WechatIMG111.jpeg","../WechatIMG112.jpeg");
var number = 1;
function preclick(){
  document.getElementById("constant_line8_1_showbox_button_previous").onclick = prepicture;
}
function prepicture(){
  if(number != 0){
    number--;
  }
  document.getElementById("constant_line8_1_showbox_stage_img_pic").src = piccontainer[number];
}

function nextclick(){
  document.getElementById("constant_line8_1_showbox_button_next").onclick = nextpicture;
}
var piclength = piccontainer.length-1
function nextpicture(){
  if(number != piclength){
    number++;
  }
  document.getElementById("constant_line8_1_showbox_stage_img_pic").src = piccontainer[number];
}


function jump(){

  document.getElementById("constant_line9_1_selection_form_select").selectedIndex = 0 ;
  document.getElementById("constant_line9_1_selection_button").onclick = jumppage;
}

function jumppage(){
  var a = document.getElementById("constant_line9_1_selection_form_select");
  var newpage = a.options[a.selectedIndex].value;

  if(newpage != a.options[0].value){
    window.location = newpage;
  }
  else{
    alert("You gonna be kidding me");
  }
}

function onebyone(){
  document.getElementById("constant_line10_1_selection_form_select1").onchange = next;
}

function next(){
  var one = document.getElementById("constant_line10_1_selection_form_select1");
  var two = document.getElementById("constant_line10_1_selection_form_select2");

  var container0 = new Array("Your choice");
  var container1 = new Array("apple","banana","peach","malon");
  var container2 = new Array("tomato","Potato","Spinach");
  var container3 = new Array("red","blue","green");
  var container4 = new Array("1","2","3");

  var number = one.selectedIndex;

  switch (number) {
    case 0:
      alert("Don't do this");
      two.options.length = 0;
      two.options[0] = new Option(container0[0]);
      break;

      case 1:
      two.options.length = container1.length;//设置跳转回这个数组的时候使得第二个select中的数目是这个数组中的长度
      for(i = 0;i < container1.length;i++){
      two.options[i] = new Option(container1[i]);
    };
    break;//加了break之后执行完这个case之后跳出switch语句

        case 2:
        two.options.length = container2.length;
        for(i = 0;i < container2.length;i++){
        two.options[i] = new Option(container2[i]);
      }
;
      break;

      case 3:
      two.options.length = container3.length;
      for(i = 0;i < container3.length;i++){
      two.options[i] = new Option(container3[i]);
    }
;
    break;

    case 4:
    two.options.length = container4.length;
    for(i = 0;i < container4.length;i++){
    two.options[i] = new Option(container4[i]);
  }
;
  break;
    default:

  }

}

function check(){
  document.getElementById("constant_line10_1_inputarea_button").onclick = function(){check1();check2();checkfinal()};
  document.getElementById("constant_line10_1_inputarea_box_input1").onkeyup = reset1;
  document.getElementById("constant_line10_1_inputarea_box_input2").onkeyup = reset2;

}
var username = new Array("15559112762","15559112236","13215021065");
var password = new Array("123456","234567","345678");
var changeA;
var judge1;
var judge2;

function check1(){
  var un = document.getElementById("constant_line10_1_inputarea_box_input1").value;
  var life = username.indexOf(un);
  changeA = life;

  if(life == -1){
    judge1 = false;
    warming1();
  }
  else {
    judge1 = true;
  }
}

function check2(){
  var pw = document.getElementById("constant_line10_1_inputarea_box_input2").value;
  var life1 = password.indexOf(pw);

  if(life1 == changeA){
    judge2 = true;
  }
  else {
    judge2 = false;
    warming2();
  }
}

function warming1(){
  document.getElementById("constant_line10_1_inputarea_box_input1").className = "wronginput";
}
function warming2(){
  document.getElementById("constant_line10_1_inputarea_box_input2").className = "wronginput";
}

function checkfinal(){
  if (judge1 == true && judge2 == true) {
    window.location.href="https://www.nutsbp.com";
  }
  else{
    alert("username or password must be wrong ,please check it again!!")
  }

}

function reset1(){
  document.getElementById("constant_line10_1_inputarea_box_input1").className = "input";
}
function reset2(){
  document.getElementById("constant_line10_1_inputarea_box_input2").className = "input";
}
