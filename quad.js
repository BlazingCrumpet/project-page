function runprogram(){
    var a = prompt("Please enter the variable a. Keep in mind it must be a nonzero integer.");
    if (parseInt(a) != a || a==0){
        alert("Please enter a nonzero integer.");
        exit;
    }
   
    var b = prompt("Enter the variable b, it must be an integer.");
    if (parseInt(b) != b){
        alert("Please enter an integer.");
        exit;
    }
   
    var c = prompt("Enter the variable c, it must be an integer.");
    if (parseInt(c) != c){
        alert("Please enter an integer.");
        exit;
    }
   
    var AOS = ( -1 * b) / (2 * a);
    alert("The Axis of Symmetry is " + AOS);
   
    var dis = (2b) - ( 4 * a * c);
    alert("The Discriminant is " + Discrim);
   
 
    if (dis == 0){
    alert("There is 1 Real Root.");
    }
    if (dis > 0){
    alert("There are 2 Real Roots.");
    }
    if (dis < 0){
    alert("There are 2 Imaginary Roots.");
    }
   
}
