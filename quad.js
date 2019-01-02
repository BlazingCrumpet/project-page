function quadRun(){
    var a = prompt("Enter A. It cannot be a decimal or 0.");

    if (parseInt(a) != a || a == 0){
        alert("Enter a nonzero whole number.");
        exit;
    }

    var b = prompt("Enter B. It cannot be a decimal");

    if (parseInt(b) != b){
        alert("Enter an integer.");
        exit;
    }

    var c = +prompt("Enter C. It cannot be a decimal");

    if (parseInt(c) != c){
        alert("Enter an integer");
        exit;
    }

    document.getElementById("userInputs").innerHTML = "A = " + a + "<br>" + "B = " + b + "<br>" +  "C = " + c;


    var AOS = (-1 * b) / (2 * a);
    document.getElementById("aOS").innerHTML = "Axis of Symmetry = " + AOS;

    var k = (a * AOS * AOS + b * AOS + c);
    document.getElementById("ver").innerHTML = "Vertex = " + AOS + "," + k;

    var Discrim = (b * b) - (4 * a * c);
    document.getElementById("discrim").innerHTML = "Discriminant = " + Discrim;

    if (Discrim == 0){
        document.getElementById("rootType").innerHTML = "1 Real Root";
    }

    if (Discrim > 0){
        document.getElementById("rootType").innerHTML = "2 Real Roots";
    }

    if (Discrim < 0){
        document.getElementById("rootType").innerHTML = "2 Imaginary Roots";
        document.getElementById("root1").innerHTML = "Root 1 = " + (-1 * b) + "+" + "\u221A" +  (Discrim * -1) + "i /" +  (2 * a);
        document.getElementById("root2").innerHTML = "Root 2 = " + (-1 * b) + "-" + "\u221A" +  (Discrim * -1) + "i /"  + (2 * a);
    } else{
        document.getElementById("root1").innerHTML = "Root 1 = " + (-1 * b) + "+" + "\u221A" +  (Discrim * -1) + "/ " +  (2 * a);
        document.getElementById("root2").innerHTML = "Root 2 = " + (-1 * b) + "-" + "\u221A" +  (Discrim * -1) + "/ "  + (2 * a);
    }


}

function quadriGraph(){

  
    var canvas = document.getElementById('quadriCan')
    var ctx = canvas.getContext("2d");
    
    for(var lineX = -500; lineX < 500; lineX += 10){
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.moveTo(lineX, 500);
        ctx.lineTo(lineX, -500);
        ctx.stroke();
    }
    
    ctx.clearRect(0,0, ctx.width, ctx.height);
     aS = document.getElementById('A').value;
     bS = document.getElementById('B').value;
     cS = document.getElementById('C').value;
    
     scale = document.getElementById('Scale').value;
    
     A = aS/(scale)
     B = bS
     C = cS*(scale)
    
       ctx.moveTo(0,250);
       ctx.strokeStyle='black'
    
       for(var x = -250; x < 250; x++)
           {
           ctx.lineTo(x+250,(-1*(A*(x*x)+B*x+C)) + 250)
           ctx.stroke();
           }
           }
