
let music =   $("audio")[0],
 musicIcon = $("nav .container-fluid .music i");

$("nav .container-fluid .music").click(function(){
  if(music.paused){
    music.play();
    musicIcon.removeClass("fa-music").addClass("fa-stop");
  }else{
    music.pause();
    musicIcon.removeClass("fa-stop").addClass("fa-music");
  }
});

  music.addEventListener("ended", function(){
    musicIcon.removeClass("fa-stop").addClass("fa-music");
  });

$("#Home #Messages .message img").hover(
    function(){
    $("#Home .clock").addClass("hide");
    $("#Home .clock").removeClass("show");
} ,
function(){
    $("#Home .clock").addClass("show");
    $("#Home .clock").removeClass("hide");
}
);

$("#Home #Instructions .btn button").click( function(){
    $("#Home #Instructions .layout").addClass("display").delay(10).addClass("show");
    $("#Home #Instructions .btn button").addClass("d-none");
    $("#Home #Instructions .ourPlace").addClass("d-none");
    $("#Home #Instructions .layout .part .instructions").addClass("show");
  })
  
  $("#Home #Instructions .layout .back").click(function(){
    $("#Home #Instructions .btn button").removeClass("d-none");
    $("#Home #Instructions .ourPlace").removeClass("d-none");
    $("#Home #Instructions .layout").removeClass("show").delay(10).removeClass("display");
});

$("nav ul li a").click (function(e){
    e.stopPropagation();
  localStorage.activeLink = this.href;
});

$("nav ul li a").each(function(){
  if(this.href === localStorage.activeLink){
    $("nav ul li a.active").removeClass("active");
    $(this).addClass("active");
  }
});

// let sound = document.querySelector("audio");


// if (localStorage.getItem("sound") == "on") {
//     setSound("on");
// } else {
//     localStorage.setItem('sound', "off");
//     setSound("off");
// }

// function setTheme(status) {
//     localStorage.setItem('sound', status);
//     sound.setAttribute()
//   }

(function () {
    fetch("instruction.js")
        .then((response) => response.json())
        .then(function (data) {
            instructions = data;
console.log(data);
            instructions.forEach(function (instruction) {
                $("#Instructions .layout .row .part").append(`
                        <div class="instructions h-100 rounded-2 py-3 px-3">
                            <h3 class="pb-lg-3 pb-1 fs-lg-4">${instruction.title}</h3>
                            <ol>
                                <li>${instruction.point}</li>
                            </ol>
                            </div>
                `);
            });
        });
 });

// ------------------ Page Turning ------------------
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 2 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 2 + index;
            }, 500);
        }
    };
});

// ------------------ Family Choice Section ------------------
let johnson = document.querySelector("#Explore .wrapper .book .johnson"),
    vladmir = document.querySelector("#Explore .wrapper .book .vladmir"),
    maddox = document.querySelector("#Explore .wrapper .book .maddox"),
    family = document.querySelector("#Explore .wrapper .book .familyChoice"),
    paragraph = document.querySelector("#Explore .wrapper .book .hidepara"),
    closeBtn = document.querySelector("#Explore .wrapper .book .back-btn"),
    buttons = document.querySelector("#Explore .wrapper .book .buttons");

function resetFamilyChoice() {
    family.classList.remove("show", "firstchoice", "secondchoice", "thirdchoice");
    buttons.classList.remove("hide");
    paragraph.classList.remove("hide");
    closeBtn.classList.remove("showbtn");
    family.querySelectorAll("h3.textlight, p.textlight").forEach(el => el.remove());
}

johnson.addEventListener("click", function () {
    family.classList.add("show", "firstchoice");
    buttons.classList.add("hide");
    paragraph.classList.add("hide");
    closeBtn.classList.add("showbtn");

    const h3 = document.createElement("h3");
    h3.classList.add("textlight");
    h3.textContent = "Ravens of the Storm";
    const p = document.createElement("p");
    p.classList.add("textlight");
    p.textContent = "We never attack first... but we never show mercy.";
    family.append(h3, p);
});

vladmir.addEventListener("click", function () {
    family.classList.add("show", "secondchoice");
    buttons.classList.add("hide");
    paragraph.classList.add("hide");
    closeBtn.classList.add("showbtn");

    const h3 = document.createElement("h3");
    h3.classList.add("textlight");
    h3.textContent = "Serpents of the Flame";
    const p = document.createElement("p");
    p.classList.add("textlight");
    p.textContent = "Born in fire, We rise stronger.";
    family.append(h3, p);
});

maddox.addEventListener("click", function () {
    family.classList.add("show", "thirdchoice");
    buttons.classList.add("hide");
    paragraph.classList.add("hide");
    closeBtn.classList.add("showbtn");

    const h3 = document.createElement("h3");
    h3.classList.add("textlight");
    h3.textContent = "Wolves of the Shadow";
    const p = document.createElement("p");
    p.classList.add("textlight");
    p.textContent = "A king without a throne... but our throne can never be overthrown.";
    family.append(h3, p);
});

closeBtn.addEventListener("click", resetFamilyChoice);

// ------------------ Opening Animation ------------------
const coversRight = document.querySelectorAll('.cover.cover-right');

setTimeout(() => {
    coversRight.forEach(c => c.classList.add('turn'));
}, 2100);

setTimeout(() => {
    coversRight.forEach(c => c.style.zIndex = -1);
}, 2800);



