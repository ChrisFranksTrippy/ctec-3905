

(function(){
  
  let mBurger = document.getElementById("menu-burger");
  let menuDraw = document.getElementById("menu-draw");
  
  mBurger.addEventListener("click", toggleMenuDraw);
  
  function toggleMenuDraw(){
    
    menuDraw.classList.contains("showMenu") ? menuDraw.classList.remove("showMenu") : menuDraw.classList.add("showMenu");
    
  }
  
})();