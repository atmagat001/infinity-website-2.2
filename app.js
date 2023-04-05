const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const mainMenu = document.getElementById("main-menu");
const menu_items = document.querySelectorAll("li");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", hide);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener("click",function(){
        hide();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function hide(){
    mainMenu.style.top = "-100%";
    
    
}
