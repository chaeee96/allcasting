

window.addEventListener("load", () => {

  let mainImg = $(".mainImg");
  setInterval(function () {
    console.log("Hello World");
    if(mainImg.hasClass("change")){
      mainImg.removeClass("change");
    }else{
      mainImg.addClass("change");
    }
  }, 6000);
  
});