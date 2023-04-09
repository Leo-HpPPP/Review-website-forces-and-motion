function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "lightblue";
}
var title = document.getElementById("title").offsetTop;
var section1 = document.getElementById("intro").offsetTop;
var imgsection = document.getElementById("image").offsetTop;
var section2 = document.getElementById("nukes").offsetTop;
var section3 = document.getElementById("uses").offsetTop;
var section4 = document.getElementById("issues").offsetTop;
var section5 = document.getElementById("emc").offsetTop;
var section6 = document.getElementById("extra").offsetTop;
function scrollcheck(){
    const boxes = document.querySelectorAll('.navlink');
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop+10 > section1 && scrollTop+10 < section2){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[1].style.color = "#FFFFFF";
    }
    else if(scrollTop +10 > section2 && scrollTop+10  < section3){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[2].style.color = "#FFFFFF";
    }
    else if(scrollTop+10 > section3 && scrollTop+10 < section4){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[3].style.color = "#FFFFFF";
    } 
    else if(scrollTop+10 > section4 && scrollTop+10 < section5){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[4].style.color = "#FFFFFF";
    }
    else if(scrollTop+10 > section5 && scrollTop+10 < section6){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[5].style.color = "#FFFFFF";
    }
    else if(scrollTop+10 > section5 ){
        boxes.forEach(box => {
            box.style.color = 'blue';
        });
        document.getElementsByClassName("navlink")[6].style.color = "#FFFFFF";
    }
    setTimeout(scrollcheck, 10);
}
scrollcheck();