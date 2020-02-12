window.onload = step1


function step1(){

    var names = ["Puneet", "Sumit","Kavita"]
    var x = document.getElementById("list")

    names.forEach(function(value){
        var li = document.createElement('li')
        var text = document.createTextNode(value)

        li.appendChild(text)
        x.appendChild(li)

        li.onclick = function(){
            li.classList.add('selected')
            
            clearStyle()
            li.style.background = "Salmon"
            li.style.fontWeight ='Bold'
        }
    })

    //step3
    var button = document.createElement('button')
    var textnodeofbutton = document.createTextNode('Reset')
    button.appendChild(textnodeofbutton)
    document.body.appendChild(button)
    button.onclick= function(){
        clearStyle()
    }

    //step4


    var button1 = document.createElement('button')
    var textnodeofbutton1 = document.createTextNode('Delete')
    button1.appendChild(textnodeofbutton1)
    document.body.appendChild(button1)
    button1.onclick = function(){
    var x1 = document.getElementsByClassName('selected')
    while (x1.length > 0) x1[0].remove()
    }

    //step 5

    var button2 = document.createElement('INPUT')
    button2.classList.add('input-text')

    var button3 = document.createElement('button')
    var text3 = document.createTextNode('Add')
    button3.appendChild(text3)
    document.body.appendChild(button2)
    document.body.appendChild(button3)

    button3.onclick = function(){

        var w = document.getElementsByClassName('input-text')
        if(w.length > 0){
            
        }

    }
    

}

function clearStyle(){
    var x  = document.getElementById("list")
    var child = x.childNodes

    for( i in child){
        if (typeof child[i].style !== 'undefined'){
            child[i].style.background = "white"
         child[i].style.fontWeight ='normal'
        }
    }




}


/* 
function hello(){

    var shoppingarray = ["Gucci", "Armani","LV"]
    var x  = document.getElementById('list')

    shoppingarray.forEach(function(value,index){
        var li = document.createElement('li')
        var text = document.createTextNode(value)

        li.appendChild(text);
        x.appendChild(li);

    })
} */

