
function dialog() {
    
    let a = document.getElementById('a').value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    console.log(a + b + c );
    roots(a, b, c);
    
}

function prompt (x1, x2){
    
   
}

function roots(a, b, c){
    
    d = delta(a, b, c);
    
    if (d < 0){
        
        console.log(d + " irreal ");
        prompt(-1,-1);
    }
    if (d == 0){
        x1 = (-b + d**0.5)/2;
        
        console.log("discriminante igual a: " + d + " as raizes sao iguais, x1=x2= " + x1);
        prompt(x1,x1);
    }
    if (d > 0){
      
       x1 = (-b + d**0.5)/(2*a);
      
       x2 = (-b - d**0.5)/(2*a);
     
      console.log(x1, x2);
        
      prompt(x1,x2);
    }
}

function delta (a, b, c){
    
    let d = b*b -4*a*c;

   return d;
    
}
