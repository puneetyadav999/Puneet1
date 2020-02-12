window.onload = hello
console.log("hello")

function hello(){

  //step1
  var todolist  = ["shopping", "running","clubbing"]
  var x = document.getElementById("list")

  todolist.forEach(function(value, index){
    var li = document.createElement("li");

    var text = document.createTextNode(value);
    li.appendChild(text);
    x.appendChild(li);

//Step2
    li.onclick = function() {
      clearStyle();
      li.classList.add("selected");
      li.style.background = 'lightgray'
      li.style.fontWeight ='Bold'
    }

  })
  //Step3
  var button = document.createElement('BUTTON')
  var textbtn =  document.createTextNode('Reset')
  button.appendChild(textbtn)

  document.body.appendChild(button)
  button.onclick= function(){
    clearStyle()
  }


  //step 4

  var button1 = document.createElement('BUTTON')
  var textbtn1 =  document.createTextNode('Delete')
  button1.appendChild(textbtn1)
  document.body.appendChild(button1)

  button1.onclick= function(){
    const elements = document.getElementsByClassName("selected");
    while (elements.length > 0) elements[0].remove();
  }

  //step 5
  var input = document.createElement('INPUT')
  input.classList.add("input-text");

  var button2 = document.createElement('BUTTON')
  var textbtn2 =  document.createTextNode('Add')

  button2.appendChild(textbtn2)
  document.body.appendChild(input)
  document.body.appendChild(button2)

  button2.onclick= function(){
    var inputValue = document.getElementsByClassName("input-text");
    if (inputValue.length > 0) {
      var x1 = document.getElementById("list");
      var li1 = document.createElement("li");

      var text1 = document.createTextNode(inputValue[0].value);
      
      li1.appendChild(text1);
      li1.onclick = function() {
        clearStyle();
        li1.classList.add("selected");
        li1.style.background = 'lightgray'
        li1.style.fontWeight ='Bold'
      }
      x1.appendChild(li1);
    }
  }

}


function clearStyle(){
  var x = document.getElementById("list");
  var child = x.childNodes;

  for ( i in child){
    if(typeof child[i].style !== 'undefined'){
      child[i].classList.remove("selected");

      child[i].style.background = "white";
      child[i].style.fontWeight = "normal";}
  }
}
