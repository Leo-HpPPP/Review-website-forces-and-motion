    function scrollcheck(){
    var title = document.getElementById("title").offsetTop;
  var section1 = document.getElementById("intro").offsetTop;
  var imgsection = document.getElementById("image").offsetTop;
  var section2 = document.getElementById("thermonuclear").offsetTop;
  var section3 = document.getElementById("uses").offsetTop;
  var section4 = document.getElementById("danger").offsetTop;
  var section5 = document.getElementById("forces").offsetTop;
  var section6 = document.getElementById("extra").offsetTop;
      const boxes = document.querySelectorAll('.sections');
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset+140 : (document.documentElement || document.body.parentNode || document.body).scrollTop+140;
      if(scrollTop+10 > section1 && scrollTop+10 < section2){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
              box.style.fontSize = "15px";
          });
          document.getElementsByClassName("sections")[1].style.background = "#63b4cf";
      
  
      }
      else if(scrollTop +10 > section2 && scrollTop+10  < section3){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
          });
          document.getElementsByClassName("sections")[2].style.background = "#63b4cf";
      }
      else if(scrollTop+10 > section3 && scrollTop+10 < section4){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
          });
          document.getElementsByClassName("sections")[3].style.background = "#63b4cf";
      } 
      else if(scrollTop+10 > section4 && scrollTop+10 < section5){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
          });
          document.getElementsByClassName("sections")[4].style.background = "#63b4cf";
      }
      else if(scrollTop+10 > section5 && scrollTop+10 < section6){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
          });
          document.getElementsByClassName("sections")[5].style.background = "#63b4cf";
      }
      else if(scrollTop+10 > section5 ){
          boxes.forEach(box => {
              box.style.background = 'lightblue';
          });
          document.getElementsByClassName("sections")[6].style.background = "#63b4cf";
      }
      setTimeout(scrollcheck, 10);
  }
  scrollcheck();
