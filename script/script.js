var modal = document.getElementsByClassName("myModal");

var btn = document.getElementsByClassName("myBtn");

var span = document.getElementsByClassName("close");


for(let i = 0; i < btn.length; i ++) {
  btn[i].addEventListener("click", ()=>{
    modal[i].style.display = "block";
  });
  span[i].addEventListener("click", ()=>{
    modal[i].style.display = "none";
  });

}