
    document.getElementById("demo").innerHTML="welcome to javascript session";
    // let x=10;
    // let y=20;
    // sum=(x+y);
    //  document.getElementById("demo").innerText="sum="+sum+"\n"+(x-y)+"\n"+(x*y);
    //   document.getElementById("demo").innerText=(x-y);
    //   document.getElementById("demo").innerHTML="'y value:'+y";

    // let x=10;
    // x+=20;
    // document.getElementById("demo").innerText=x;

    let x;
    x=prompt("enter x value:");
    let num=parseInt(x);
    if(x>0)
    {
         document.getElementById("demo").innerText=num+ "is positive";
    }
    else if(x<0){
         document.getElementById("demo").innerText=num+ "is negative";
    }
    else{
         document.getElementById("demo").innerText=num+ "is zero";
    }