window.onload = hello;

function hello1(){

    var todoarray = ["shopping","running"]
    var y = document.getElementById("list")
    var x = document.createElement("OL");

     for ( i in todoarray) {
         x.appendChild(todoarray[i],y)
         console.log(todoarray[i])
     }


}

hello1()



      function hello() {
        var node = document.createElement("LI");

        var textnode1 = document.createTextNode("Costco");
        var textnode2 = document.createTextNode("Cooking");
        var textnode3 = document.createTextNode("running");

       
        node.appendChild(textnode1);
        node.appendChild(textnode2);
        node.appendChild(textnode3);
        document.getElementById("list").appendChild(node);
      }

/*
function tododlist(){
     var x = document.createElement('ol')
     var y = document.createElement('li')
     var t = document.createTextNode('shopping')

     var x = document.createElement("OL");
     x.setAttribute("id", "myOl");
    document.body.appendChild(x);

  var y = document.createElement("LI");
  var t = document.createTextNode("Shopping");
  var k = document.createTextNode("Gym");
  var p = document.createTextNode("drivingtest");

  y.appendChild(t);
  document.getElementById("myOl").appendChild(y);
}


function  initAll1(){

var todoarray  = ["Shoping","Haircut","Drinks"]

  var answer = todoarray.slice(1, 3);
  document.getElementById("demo").innerHTML = asnwer;

}

document.getElementById("list").innerHTML = todoarray
document.getElementById("list").style.color ='purple'

    var checkbox1 = document.createElement('input')

    checkbox1.type ="checkbox"

    x = document.getElementById("list");

    x.appendChild(checkbox)
    x.appendChild('<li>apple</li>')





*/
