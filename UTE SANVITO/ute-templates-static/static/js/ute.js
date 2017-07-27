
window.onscroll = function(){
    var menu = document.getElementById("menu");
    var spacer = document.getElementById("menu-spacer");
    var logo = document.getElementsByClassName("navbar-brand")[0].children;
    var sidebar = document.getElementById("sidebar");
    
    if((document.documentElement.scrollTop >= 180 || document.body.scrollTop >= 180) && document.body.clientWidth >= 768){
        if(!menu.classList.contains("fixed-menu")){
            addClass(menu, "fixed-menu");
        }
        addClass(spacer, "spacer");
        show(logo[0], true);
        show(logo[1], true);
        
        if(sidebar != null){
            addClass(sidebar, "sidebar-fixed");
        }
        
    } else if(document.body.scrollTop < 180){
        if(menu.classList.contains("fixed-menu")){
            removeClass(menu, "fixed-menu");
        }
        removeClass(spacer, "spacer");
        show(logo[0], false);
        show(logo[1], false);
        
        if(sidebar != null){
            removeClass(sidebar, "sidebar-fixed");
        }
        
    } else if(document.body.scrollTop >= 0 && document.body.clientWidth < 768){
        if(!menu.classList.contains("fixed-menu")){
            addClass(menu, "fixed-menu");
        }
        show(logo[0], false);
        show(logo[1], false);
    }
}



function show(elem, toShow){
    if(toShow){
        elem.classList.remove("hide");
        elem.classList.add("show");
    } else {
        elem.classList.add("hide");
        elem.classList.remove("show");
    }
}



function addClass(elem, theClass){
    elem.classList.add(theClass);
}

function removeClass(elem, theClass){
    elem.classList.remove(theClass);
}



