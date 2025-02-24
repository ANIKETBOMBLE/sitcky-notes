const textarea =document.querySelector("textarea");
const form = document.querySelector("form");
const color = document.querySelector("input");
const undo = document.querySelector(".undo");
const container = document.querySelector(".notes-container");
const deletedNotes =[];

form.addEventListener("submit",(e) => {
	e.preventDefault();
	
	
	// creating div elemnets only 
	const note = document.createElement("div");
	const close = document.createElement("span");
	
	
	
	// giving elmets id or classes only
	note.classList.add("note");
	close.classList.add("close");
	
	
	//adding style or something 
	note.innerText = textarea.value;
	close.innerHTML = "&times;";
	
	
	close.addEventListener("click" , (e) =>{
		deletedNotes.push(e.target.closest(".note"));
    e.target.closest(".note").remove();
	});

	
	//giviing style to specific div or elements 
	note.style.backgroundColor=color.value;

	
	//appneding elements only 
	container.append(note);
	note.append(close);
});

undo.addEventListener("click",(e)=>{
	const lastdeletedele = deletedNotes.pop();
	container.append(lastdeletedele);
});
