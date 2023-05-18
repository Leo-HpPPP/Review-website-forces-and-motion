    function scrollcheck(){
  var title = document.getElementById("main").offsetTop;
    const boxes = document.querySelectorAll('.sections');
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset+140 : (document.documentElement || document.body.parentNode || document.body).scrollTop+140;
    if(scrollTop > title){
        document.getElementById("main").style.background = "#63b4cf";
    

    }else {
      document.getElementById("main").style.background = 'lightblue';
      document.getElementById("main").style.fontSize = "15px";
    }
    setTimeout(scrollcheck, 10);
}
scrollcheck();


