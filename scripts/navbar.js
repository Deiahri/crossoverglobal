
let darkness_screen_element = document.createElement('div');
darkness_screen_element.classList = 'darkness_screen hideable fullHide';
darkness_screen_element.setAttribute('name', 'darkness_screen');

let navbar_screen_element = document.createElement('header');
navbar_screen_element.setAttribute('id', 'navbar');
navbar_screen_element.classList = 'navbar d-flex flex-wrap py-3 border-bottom px-3'
navbar_screen_element.innerHTML = `
<div class="desktop-only">
    <a href="/" class="d-flex align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img class="logo">
    </a>
</div>

<div class="mobile-only">
    <a href="/" class="d-flex align-items-center mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img class="logo smaller-2">
    </a>
</div>
<ul class="nav nav-pills center-horizontal">
    <div class="mobile-only">
        <li>
            <div name="open_menu_button" class="center-horizontal hover-cursor" style="width: 30px; height: 30px; min-width: 30px; min-height: 30px; justify-content: center; justify-items: center; display: flex;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
        </li>
    </div>
    <div class="desktop-only">
        <li class="nav-item">
            <a href="/" class="nav-link" aria-current="page">Home</a>
        </li>
        <!-- make change -->
        <li class="nav-item">
            <div class="dropdown-center">
                <a class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Make Change
                </a>
                
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="/search/?type=projects">Projects</a>
                    <a class="dropdown-item" href="/search/?type=sponsorship">Sponsorships</a>
                </div>
            </div>
        </li>
        <!-- learn more -->
        <li class="nav-item">
            <div class="dropdown show">
                <a class="btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-toggle="dropdown">
                    Learn More
                </a>
                
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="/search/?type=good_news">The Good News</a>
                    <a class="dropdown-item" href="/about">About</a>
                    <a class="dropdown-item" href="/contact">Contact Us</a>
                    <a class="dropdown-item" href="/our-sponsors">Our Sponsors</a>
                </div>
            </div>
        </li>
        <li class="nav-item" style="border-radius: 10px; background-color: red;">
            <a href="/projects/page/?title=all projects" class="nav-link" aria-current="page" style="color: white">Donate</a>
        </li>
    </div>
</ul>`;

let mobile_navbar_menu_element = document.createElement('div');
mobile_navbar_menu_element.classList = 'mobile-menu hidden';
mobile_navbar_menu_element.innerHTML = `
<div class="hover-cursor" name="close_menu_button" style="padding-top: 30px; padding-right:20px; width: 100%; display: flex; flex-direction: row; justify-content: end; align-items: end;">
    <img class="close_button" src="" style="height: 30px">
</div>
<div class="menu-button no-border">
    <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
        <a style="font-size: 20px; margin: 0px" href="/">Home</a>
    </div>
</div>

<div class="menu-button shrink-vertical">
    <div name="button_content" class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
        <a style="font-size: 20px; margin: 0px">Make Change</a>
        <img name="dropdown-icon" class="drop_down_button rotatable_180" style="position: absolute; right: 4px; width: 25px; margin-top: 5px;">
    </div>
    <div style="background-color: rgb(235, 235, 235); width: 100%; overflow: hidden;" class="shrinkable align-vertical">
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/search/?type=projects">Projects</a>
        </div>
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/search/?type=sponsorship">Sponsorships</a>
        </div>
    </div>
</div>

<div class="menu-button shrink-vertical">
    <div name="button_content" class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
        <a style="font-size: 20px; margin: 0px">Learn More</a>
        <img name="dropdown-icon" class="drop_down_button rotatable_180" style="position: absolute; right: 4px; width: 25px; margin-top: 5px;">
    </div>
    <div style="background-color: rgb(235, 235, 235); width: 100%; overflow: hidden;" class="shrinkable-3 align-vertical">
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/search/?type=good_news">The Good News</a>
        </div>
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/about">About</a>
        </div>
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/contact">Contact Us</a>
        </div>
        <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
            <a style="font-size: 20px; margin: 0px" href="/our-sponsors">Our Sponsors</a>
        </div>
    </div>
</div>
<div class="menu-button" style="background-color: red; color:white">
    <div class="align-horizontal" style="padding-top: 10px; padding-bottom: 10px;">
        <a href="/projects/page/?title=all projects" style="font-size: 20px; margin: 0px">Donate</a>
    </div>
</div>`;

let navbar_buffer_element = document.createElement('div');
navbar_buffer_element.setAttribute('style', "width: 100%; height: 90px;");


body.insertBefore(navbar_buffer_element, body.childNodes[0]);
body.insertBefore(mobile_navbar_menu_element, body.childNodes[0]);
body.insertBefore(navbar_screen_element, body.childNodes[0]);
body.insertBefore(darkness_screen_element, body.childNodes[0]);

var navbar = document.getElementById('navbar');

try {
    document.addEventListener('scroll', hideOnScroll);
} catch {
    console.log("uh oh");
}

var lastScrollYPos = 0;
var ignoreScrollEventCount = 10;
let currentScrollEventCount = 0;
function hideOnScroll () {
    currentScrollEventCount++;
    if(currentScrollEventCount >= ignoreScrollEventCount) {
        let currentScrollYPos = document.documentElement.scrollTop;
        if(currentScrollYPos > lastScrollYPos) {
            navbar.classList.add("navbar-hide");
        } else {
            navbar.classList.remove("navbar-hide");
        }
        lastScrollYPos = currentScrollYPos;
        currentScrollEventCount = 0;
    }
}

// adds drop down functionality to mobile menu dropdowns
for (let s of document.querySelectorAll('.shrink-vertical')) {
    let dropdown_icon = getChildWithName(getChildWithName(s, 'button_content'), 'dropdown-icon')
    s.onclick = () => {
        s.classList.toggle('shrink');
        dropdown_icon.classList.toggle('rotate');
    }
}

let close_menu_button = document.getElementsByName('close_menu_button')[0];
let open_menu_button = document.getElementsByName('open_menu_button')[0];

try {
    open_menu_button.onclick = set_mobile_menu_state.bind(null, true);
    close_menu_button.onclick = set_mobile_menu_state.bind(null, false);
} catch (err) {
    console.log('sumn', err);
}

let darkness_screen = document.getElementsByName('darkness_screen')[0];
let mobile_menu = document.getElementsByClassName('mobile-menu')[0];
function set_mobile_menu_state(state) {
    if(state == true) {
        mobile_menu.classList.remove('hidden');
        display_element(darkness_screen, true);
        body.classList.add('overflow-y-hidden');
    } else if (state == false) {
        mobile_menu.classList.add('hidden');
        display_element(darkness_screen, false);
        body.classList.remove('overflow-y-hidden');
    }
}
