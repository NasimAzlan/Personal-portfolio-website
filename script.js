var tablinks = document.getElementsByClassName("tab-lnks");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("avtive-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("avtive-tab");
    }
}
