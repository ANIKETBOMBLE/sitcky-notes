const textarea =document.querySelector("textarea");
const form = document.querySelector("form");
const color = document.querySelector("input");
const undo = document.querySelector(".undo");
const container = document.querySelector(".notes-container");

const deletedNotes =[];


form.addEventListener("submit",(e) => {
	if (form[0].value == "") {
			  alert("please add some content"); 
			  return;
	}
	document.querySelector("p").style.display = "none";

	e.preventDefault();	
	// creating div elemnets only 
	const note = document.createElement("div");
	const close = document.createElement("span");

	
	// giving elmets id or classes only
	note.classList.add("note");
	close.classList.add("close");
	textarea.classList.add("animate__shakeX");

	
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



// function mydiv(){
// 	const content = document.getElementById("remove");
// 	if(content.textContent.trim()===''){
// 		content.classList.add('shake');
		
// 		content.addEventListener("animationend",()=>{
// 			content.classList.remove('shake');
// 		});
// 	}else{
// 		while(content.firstChild){
// 			content.removeChild(content.firstChild);
// 		}
// 	}
	
// 	const newdiv = document.createElement("div");
// 	newdiv.textContent ='this is new div';
// 	content.appendChild(newdiv);
// }
// form.addEventListener("click", () => {
// 	if (form[0].value == "") {
// 	  textarea.classList.add("animate__shakeX");
// 	  alert("Enter Some Text"); 
// 	  return;
// 	}
// 	textarea.classList.remove("animate__shakeX");
// 	document.querySelector("p").style.display = "none";
// 	button2 = document.querySelectorAll(".buttons");
// 	removeNotes();
//   });