var count = localStorage.getItem("counter");
var money = 100;





document.getElementById('clickCount').innerHTML = localStorage.getItem("counter");
document.getElementById('money').innerHTML = money;
function cl() 
{
     localStorage.setItem('counter',count);
     document.getElementById('clickCount').innerHTML = count++;
     

}

function shop(){
	alert("Магазин временно не работает...");
	console.log("It's working");
}
document.getElementById("magazin").onclick = shop;
document.getElementById("click=").onclick = cl;





