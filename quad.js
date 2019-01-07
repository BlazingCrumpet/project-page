function quadRun(){
   
   
    var A = document.getElementById("A").value
    if (parseInt(A) != A || A == 0){
        alert("The Input is either 0 or a decimal.");
        exit;
    }
 
    var B = document.getElementById("B").value
 
    if (parseInt(B) != B){
        alert("The input is a decimal.");
        exit;
    }
 
    var C = Number(document.getElementById("C").value)
 
    if (parseInt(C) != C){
        alert("The input is a decimal.");
        exit;
    }
 
    document.getElementById("userInputs").innerHTML = "A = " + A + "<br>" + "B = " + B + "<br>" +  "C = " + C;
 
 
    var AOS = (-1 * B) / (2 * A);
    document.getElementById("aOS").innerHTML = "Axis of Symmetry = " + AOS;
 
    var k = (A * AOS * AOS + B * AOS + C);
    document.getElementById("ver").innerHTML = "Vertex = " + AOS + "," + k;
 
    var Discrim = (B * B) - (4 * A * C);
    document.getElementById("discrim").innerHTML = "Discriminant = " + Discrim;
 
    if (Discrim == 0){
        document.getElementById("rootType").innerHTML = "1 Real Root";
    }
 
    if (Discrim > 0){
        document.getElementById("rootType").innerHTML = "2 Real Roots";
    }
 
    if (Discrim < 0){
        document.getElementById("rootType").innerHTML = "2 Imaginary Roots";
        document.getElementById("root1").innerHTML = "Root 1 = " + (-1 * B) + "+" + "\u221A" +  (Discrim * -1) + "i /" +  (2 * A);
        document.getElementById("root2").innerHTML = "Root 2 = " + (-1 * B) + "-" + "\u221A" +  (Discrim * -1) + "i /"  + (2 * A);
    } else{
        document.getElementById("root1").innerHTML = "Root 1 = " + (-1 * B) + "+" + "\u221A" +  (Discrim * -1) + "/ " +  (2 * A);
        document.getElementById("root2").innerHTML = "Root 2 = " + (-1 * B) + "-" + "\u221A" +  (Discrim * -1) + "/ "  + (2 * A);
    }
 
 
 
 
 
 
 
    var canvas = document.getElementById('quadriCan')
    var ctx = canvas.getContext("2d");
   
    for(var lineX = -500; lineX < 500; lineX += 10){
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.moveTo(lineX, 500);
        ctx.lineTo(lineX, -500);
        ctx.stroke();
    }
     for(var lineX = -500; lineX < 500; lineX += 10){
        ctx.beginPath();
        ctx.strokeStyle = "black"
        ctx.moveTo(500, lineX);
        ctx.lineTo(-500, lineX);
        ctx.stroke();
    }
   
    ctx.clearRect(0,0, ctx.width, ctx.height);
     aG = document.getElementById('A').value;
     bG = document.getElementById('B').value;
     cG = document.getElementById('C').value;
   
     scale = document.getElementById('Scale').value;
   
     A = aG/(scale)
     B = bG
     C = cG*(scale)
   
       ctx.moveTo(0,250);
       ctx.strokeStyle='black'
   
       for(var x = -250; x < 250; x++)
           {
           ctx.lineTo(x+250,(-1*(A*(x*x)+B*x+C)) + 250)
           ctx.stroke();
           }
}
