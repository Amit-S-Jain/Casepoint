var x = 0, y = 0, op = 0, ans = 0;

function no0cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 0;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 0;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no1cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 1;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 1;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no2cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 2;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 2;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no3cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 3;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 3;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no4cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 4;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 4;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no5cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 5;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 5;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no6cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 6;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 6;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no7cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 7;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 7;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no8cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 8;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 8;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}
function no9cl(){
	if ( op == 0 ) {
		x = ( x * 10 ) + 9;
		document.getElementById('display').innerHTML= x;
	}
	else{
		y= ( y * 10 ) + 9;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}

function accl(){
	x=0;
	y=0;
	ans=0;
	op=0;
	document.getElementById('display').innerHTML= 0;	
}

function divcl(){
	op="/";
		document.getElementById('display').innerHTML= x + ' ' + op;
}

function mulcl(){
	op="*";
	document.getElementById('display').innerHTML= x + ' ' + op;
}

function subcl(){
	op="-";
	document.getElementById('display').innerHTML= x + ' ' + op;
}

function addcl(){
	op="+";
	document.getElementById('display').innerHTML= x + ' ' + op;
}

function modcl(){
	op=" mod ";
	document.getElementById('display').innerHTML= x + ' ' + op;
}


function equalcl(){
	switch(op)
	{
		case "/":
			ans = x / y;
			break;
		case "*":
			ans = x * y;
			break;
		case "-":
			ans = x - y;
			break;
		case "+":
			ans = x + y;
			break;
		case " mod ":
			ans = x % y;
			break;
	}
	document.getElementById('display').innerHTML= ans;
	x=ans;
	y=0;
}
/*
function backcl(){
	if(op==0)
	{
		x=x/10;
		document.getElementById('display').innerHTML= x;
	}
	if (op!=0 && y=0){
		op=0;
		document.getElementById('display').innerHTML= x + ' ' + op;
	}
	else{
		y=y/10;
		document.getElementById('display').innerHTML= x + ' ' + op + ' ' + y;
	}
}*/