function remove(tr){
	tr = tr.parentElement.parentElement
	let id = tr.id;

	let arr = JSON.parse(localStorage.getItem("data"));

	arr = arr.filter((elm)=>elm.roll!= id);
	data = arr
	localStorage.setItem("data",JSON.stringify(arr))
	createRow(arr);
}


const creatElement = (roll,name,result) => {
	return 	(`<tr id="${roll}"><td>${roll}</td><td>${name}</td><td>${result}</td><td class="text-danger"><i onclick="remove(this)" class="far fa-times-circle fa-2x"></i></td></tr>`);
}

const createRow = (data=[]) =>{
	
	if(data)
	{
		let elements = data.map((curr)=>{
							let roll = curr.roll;
							let name = curr.name;
							let result = curr.result;
							return creatElement(roll, name, result);
						});
		elements = elements.join("") // array to string
		document.getElementById("rows").innerHTML = elements;
	}

}




let x = localStorage.getItem("data");
if(x){
	x = JSON.parse(x)
	createRow(x)
}
else{
	x=[];
}
let data = x;




const insert = () =>{
	let roll = document.getElementById("roll").value;
	let name = document.getElementById("name").value;
	let result = document.getElementById("result").value;

	if(roll && name && result)
	{
		const obj = {roll,name,result};

		data.push(obj);
		localStorage.setItem("data", JSON.stringify(data));		
		data = JSON.parse(localStorage.getItem("data"));
		createRow(data);	
		document.getElementById("roll").value = ""
		document.getElementById("name").value = ""
		document.getElementById("result").value = ""
	}
	else{
		alert("Please fill the data !!!");		
	}
}

let add = document.getElementById("add");
add.addEventListener("click",insert)
