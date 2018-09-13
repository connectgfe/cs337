 
  
   var g_no = 1;
     
   document.getElementById("submitguess").onclick = function(){
     
    var x = document.getElementById("guessBox").value;

    var b = document.getElementById("begBox").value;

    var e = document.getElementById("endBox").value;

    var p = Math.floor(Math.random() * 10 + 3);

 
    if(x == (b+e))
    {    
        alert("CORRECT!!" + g_no + " GUESS ");
    }
    else
    {
        g_no++;
        alert("OOPS SORRY!! TRY AGAIN")
    }

    if(g_no > 2)
    {
       alert("QUIT NOW, YOU'LL NEVER GET IT")
    }
 
   }



