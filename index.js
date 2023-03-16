// 34367373-7c2f4f77157afb0dc958d6e60 Key of Pixaby
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
	navbar = document.querySelector(".nav-bar");
	navbar.classList.toggle("active"); // Toggle is used to add and remove a class name from an element
}
var API_KEY = '34367373-7c2f4f77157afb0dc958d6e60';

const getPhotos = (photo) => {
	var inputID = document.getElementById("search");
	inputID.innerHTML = photo;
	let p = fetch("https://pixabay.com/api/?key=34367373-7c2f4f77157afb0dc958d6e60&q=" + photo + "&image_type=photo&pretty=true");
	p.then((value1) => {
		console.log(value1.status);
		console.log(value1.ok);
		return value1.json()
	}).then((value2) => {
		for (var index = 0; index < 20; index++) {
			var url = value2.hits[index].webformatURL;
			let className = document.querySelector(".images-blocks" + index);
			className.setAttribute("src", url);
		}
		console.log(value2);
	})
}

// For type and search
const subs = document.getElementById("submit");
const input = document.getElementById("search");
input.addEventListener("keypress", function(e){
	if(e.key === "Enter"){
		document.getElementById("submit").click();
	}
})
subs.addEventListener("click", function(e){
	console.log(search.value);
	getPhotos(search.value);
})

// Navbar click and show
const list = document.getElementById("list");
list.addEventListener("click", function(e){
	var StringValue = document.getElementById("list").textContent;
	var actual = StringValue+"+model"
	getPhotos(actual);
})
const home = document.getElementById("home");
home.addEventListener("click",function(e){
	var StringValue = document.getElementById("home").textContent;
	StringValue = StringValue+"+model";
	getPhotos(StringValue);
})
const list1 = document.getElementById("list1");
list1.addEventListener("click", function(e){
	var StringValue = document.getElementById("list1").textContent;
	var actual = StringValue+"+model"
	getPhotos(actual);
})
const list2 = document.getElementById("list2");
list2.addEventListener("click", function(e){
	var StringValue = document.getElementById("list2").textContent;
	var actual = StringValue+"+model"
	getPhotos(actual);
})
const list3 = document.getElementById("list3");
list3.addEventListener("click", function(e){
	var StringValue = document.getElementById("list3").textContent;
	var actual = StringValue+"+model"
	getPhotos(actual);
})
getPhotos("normal")