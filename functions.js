function goto_about(){
	window.location="/index.html#about";

	document.getElementById("about_li").className+=" active";
	document.getElementById("home").className="";
	document.getElementById("research").className="";
	document.getElementById("projects").className="";
}

function load(){

	if(window.location.href.indexOf("#about")> -1){
		document.getElementById("about_li").className+=" active";
		document.getElementById("home").className="";
		document.getElementById("research").className="";
		document.getElementById("projects").className="";
	}
}

