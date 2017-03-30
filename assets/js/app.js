var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");

select.onchange = function(){
  if(select.value == "original"){
    for(var i = 0; i<img.length; i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("zepia");
    }
  }
  if(select.value == "blanco-negro"){
    for(var i = 0; i<img.length; i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("zepia");
      img[i].classList.add("blanco-negro");
    }
  }
  if(select.value == "invertir-colores"){
      for(var i = 0; i<img.length; i++){
        img[i].classList.remove("blanco-negro");
        img[i].classList.remove("invertir-colores");
        img[i].classList.remove("zepia");
        img[i].classList.add("invertir-colores");
    }
  }
  if(select.value == "zepia"){
      for(var i = 0; i<img.length; i++){
        img[i].classList.remove("blanco-negro");
        img[i].classList.remove("invertir-colores");
        img[i].classList.remove("zepia");
        img[i].classList.add("zepia");
    }
  }
}
