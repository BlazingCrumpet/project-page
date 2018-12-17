function remove(){
	document.form.view.value=""
}



function input(number){
	document.form.view.value = document.form.view.value + number
}




function output(){
	document.form.view.value = eval(document.form.view.value)
	
	if (document.form.view.value == 'Infinity'){
		document.form.view.value = 'Undefined'
}
}


function header(){
    document.title = "Extra";
    document.getElementById("title").innerHTML = document.getElementById("uinp").value
}




function runprogram() {
	var timesTable = +prompt('What number?', 0);

	var startTable = +prompt('What will it be multiplied by?', 0)

	var endTable = +prompt('What number will it stop at?', 0)

	var i = 0

	 for(i = startTable; i <= endTable; i++){
		 document.write(timesTable + '*' + i + '=' + timesTable * i)
		 document.write('<br/>');
		 
	 }
	document.write('Refresh the page and press the back arrow to try a new set of numbers.')
	document.write('<button id="2" style = "color:red" onclick="runprogram()"> <strong>Start Program</strong> </button>')
	document.write('<button id="back" onclick="goBack()">Back</button> <button id="forward" onclick="goForward()">Forward</button>')
	}