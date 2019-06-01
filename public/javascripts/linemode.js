"use strict"

// array representing the numeric options for the site
let siteMap = [
	"/",					// 0, root
	"/VM",					// 1, VM homepage
	"/VM/Example",				// 2, System/c
	"/VM/Docs",				// 3, Documentation
	"/VM/Source",				// 4, Source code
	"/Virtual-Reality-Club",		// 5, VR Club webpage
	"/Virtual-Reality-Club/Website",	// 6, VR Club website link
	"/Virtual-Reality-Club/Source",		// 7. VR Club github
	"/About",				// 8, About page
	"/Blog",				// 9, Blog homepage
	"/Contact",				// 10, Contact page
	"/Website-Source",			// 11, Website sourcecode
	"/Changelog",				// 12, Changelog for the site	
]



// this prints out the body text like a line mode browser.
function dispLnMode(speed, text, targetId) 
{
	if (text.length > 0) 
	{
		document.getElementById(targetId).innerHTML += text[0]; // fetch first element of string 
    		setTimeout( () => { dispLnMode(speed, text.slice(1), targetId); }, speed); // recurse
	}
}



// this gets the input for the website. 
function getInput(targetId) 
{
	let input;
	document.addEventListener('keypress', (event) => {
		if(event.key === '\n')
		{
			return ""
		}
		else 
		{
			document.getElementByID(targetID).innerHTML += event.key;
			return event.key + getInput();
		}
	});
}

function getPageSelection(targetId) 
{
	let input = getInput(targetId);	
	
	if((parseInt(input) === NaN) || (parseInt(input) >= siteMap.length) || (parseInt(input) < 0 )) 
	{
		document.getElementById(targetId).innerHTML += "\n?" // display "helpful" error message and recurse
		getPageSelection(targetId);
	}
	else 
	{
	//	window.location.href = siteMap[parseInt(input)]; // goto page
		alert(input);
	}

}

