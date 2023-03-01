var menuHam = document.getElementById("menuHamburger");
var menuMain = document.getElementById("mainMenu");

if(menuHam != null && menuMain!= null) {
	menuHam.addEventListener('click', function(e){
		
		if(menuMain.className == 'menuNav is-active') {
			menuMain.className = 'menuNav ';
			
		}
		else {
			menuMain.className = 'menuNav is-active';
		}
	});
}
else {
	alert('un des deux éléments pas présents');
}