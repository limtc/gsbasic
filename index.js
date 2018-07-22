// GScript BASIC Web UI

var agent = navigator.userAgent;

if (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0)
	window.location.href = "iphone.html";
	
// Load script

function load(script) {
	var request = new XMLHttpRequest();
	var area = document.getElementById("scriptArea");

	if (request) {
		request.open("GET", "scripts/" + script + ".js", true);

		request.onreadystatechange = function() {
			if (request.readyState == 4)
				area.value = request.responseText;
			else
				area.value = "";
		};

		request.send(null);
	}
	else
		area.value = "";
}

function loadScript() {
	var file = document.getElementById("scripts").value;
	
	if (file == "user") {
		var script = getStorage().getItem("script");
		document.getElementById("scriptArea").value = (!script) ? "" : unescape(script);
		document.getElementById("canvasArea").src = "";
		runScript();
	}
	else {
		load(file);
		run(file);
	}
}

// Run script

function run(script) {
	var area = document.getElementById("canvasArea");
	area.src = "run.html?file=" + script;
	area.focus();

}

function runScript() {
	var area = document.getElementById("canvasArea");
	area.src ="runscript.html?script=" + escape(document.getElementById("scriptArea").value);
	area.focus();
}

// New script

function newScript() {
	area = document.getElementById("scriptArea");
	
	if (area.value.length > 0) {
		if (!confirm("This will erase the current program, are you sure?"))
			return;
	}

	area.value = "";				
	document.getElementById("canvasArea").src = "";
}

// Save script

function saveScript() {
	area = document.getElementById("scriptArea");
	
	if (area.value.length > 0) {
		try {
			getStorage().setItem("script", escape(area.value));
			alert("The user script is saved.");
		}
		catch(e) {
			alert("Error in saving the file: " + e)
		}
	}
	else
		alert("No script is saved.");
}

// Get local storage

function getStorage() {
	if (typeof localStorage == "object")
		return localStorage;
	else
		return globalStorage[location.host];
}