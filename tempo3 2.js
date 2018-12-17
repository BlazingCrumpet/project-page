function runprogram(degree) { //* Allows code below to function constantly independently
    var Centi; //* sets a variable for numbers within the boxes
    if (degree == "C") {
        Centi = parseFloat(document.getElementById("cels").value) * 9 / 5 + 32; //* If number is in C box, performs Celsius to Fahrenheit
        document.getElementById("fahr").value =(Centi); //* Rounds the number to the nearest whole integer to prevent large decimal numbers
    } 
    
    
    
    if (degree == "F")  {
        Centi = parseFloat(document.getElementById("fahr").value - 32) * 5 / 9; //* If number is in F box, performs Fahrenheit to Celsius
        document.getElementById("cels").value =(Centi); //* Rounds to nearest whole integer to prevent large decimals
    }
}
