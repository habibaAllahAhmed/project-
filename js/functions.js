
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    document.querySelector('#Home .clock .time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateClock, 1000);

updateClock();

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector("audio").play();
});

function openPopup(popupName){
    $(".popup[data-popup-name='Bloodlines'] .box ol li:gt(3)").hide();
$(".popup[data-popup-name='Bloodlines'] .box ol hr:gt(3)").hide();
$(".popup[data-popup-name='Bloodlines'] .box .seeAllBtn").show();

$(".popup[data-popup-name='Bloodlines'] .box .seeAllBtn").click(function(){
    $(".popup[data-popup-name='Bloodlines'] .box ol li:gt(3)").slideDown();
    $(".popup[data-popup-name='Bloodlines'] .box ol hr:gt(3)").slideDown();
    $(this).hide();
});
    $(`.popup[data-popup-name='${popupName}']`).addClass("active");
    $(`.popup[data-popup-name='${popupName}']`).delay(10).addClass("show");
         $(`.popup[data-popup-name='${popupName}'] .box`).click(function(e){
    e.stopPropagation();
 });
}

function closePopup(popupName){
    $(`.popup[data-popup-name='${popupName}']`).removeClass("show");
    $(`.popup[data-popup-name='${popupName}']`).delay(10).removeClass("active");
}

