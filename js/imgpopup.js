var modal = document.getElementById('myModal');
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var imgModal = document.getElementById("img01");

img.onclick = function(){
  modal.style.display = "block";
  imgModal.src = this.src;

}

img1.onclick = function(){
  modal.style.display = "block";
  imgModal.src = this.src;

}

img2.onclick = function(){
  modal.style.display = "block";
  imgModal.src = this.src;

}
img3.onclick = function(){
  modal.style.display = "block";
  imgModal.src = this.src;

}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}
