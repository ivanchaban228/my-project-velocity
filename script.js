const tabBtns = document.querySelectorAll(".tabs_nav button");
console.log(tabBtns);
const tabsItem = document.querySelectorAll(".tabs_title");
console.log(tabsItem );

function hideTabs(){
    tabsItem.forEach(item => item.classList.add("hide"));
    tabBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index){
    tabsItem[index].classList.remove("hide");
    tabBtns[index].classList.add("active")
}

hideTabs();
showTab(0);

tabBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}));

const anchors = document.querySelectorAll(".header_nav a");
console.log(anchors);

anchors.forEach(anc =>{
    anc.addEventListener("click",function(event){
        event.preventDefault();
        const id = anc.getAttribute("href");
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop,
            behavior: "smooth"
        });
    });
});


