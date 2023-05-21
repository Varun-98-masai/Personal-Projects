let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", function(e){
  e.preventDefault();

  formValidation()
})

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Please enter a Message";
        console.log("Failiure");
    }else{
        createData()
        console.log("Success");
        msg.innerHTML = "";
    }
}

let data = {};

let createData = () =>{
    data["value"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
  <div>
    <p>${data.value}</p>
    <span class="options">
      <i onClick="editPost(this)" class="fas fa-edit"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
  };