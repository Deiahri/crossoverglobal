const body = document.getElementsByTagName('body')[0];

const image_path_project = '/images/projects';
const image_path_good_news = '/images/good-news';
const image_path_sponsorship = '/images/sponsorship';

function getChildWithName(element, name) {
    for(let child of element.children) {
        if(child.getAttribute('name') == name) {
            return child;
        }
    }
}

function display_element(element, state) {
    // console.log('hiding? ', state);
    if(state == true && element.classList.contains('fullHide')) {
        element.classList.add('fadeHide');
        element.classList.remove('fullHide');
        setTimeout(() => {
            element.classList.remove('fadeHide');
        }, 200);
    } else if (state == false && !element.classList.contains('fullHide')) {
        element.classList.remove('fullHide');
        element.classList.add('fadeHide');
        setTimeout(() => {  
            element.classList.add('fullHide');
        }, 200);
    }
}

function arrayContainsAny(arr, arr2) {
    if(!arr||!arr2) {
        return false;
    }
    for(let val of arr2) {
        if(arr.includes(val)) {
            return true;
        }
    }
    return false;
}

function getPageParameters() {
    try {
        let url = document.location.href;
        let params = url.split('?')[1].split('&');
        let parameter_obj = {}
        let temp;
        for(let param of params) {
            temp = param.split('=');
            temp[1] = temp[1].replaceAll('%27','\''); // replaces %20 with spaces.
            temp[1] = temp[1].replaceAll('%20',' '); // replaces %20 with spaces.
            parameter_obj[temp[0]] = temp[1];
        }
        return parameter_obj;
    } catch {
        return {};
    }
}

function getPagePath() {
    let url = document.location.href;
    let cut1 = url.substring(url.indexOf('//')+2);
    return cut1.substring(cut1.indexOf('/')+1);
}

const file_extensions = {
    'video': ['mp4', 'mkv', 'mov'],
    'image': ['png', 'jpg', 'jpeg', 'gif']
}
function file_type(file_name) {
    if(file_name.includes('youtube.com')) {
        return 'youtube';
    }
    
    let current_file_extension = get_file_ext_type(file_name);
    for(let file_extension_type in file_extensions) {
        if(file_extensions[file_extension_type].includes(current_file_extension))
        {
            return file_extension_type;
        }
    }
}


function get_file_ext_type(file_name) {
    try {
        return file_name.substring(file_name.lastIndexOf('.')+1).toLowerCase();
    } catch {
        return null;
    }
}

// automatically resizes an element for 16:9 aspect ratio
function resize_iframe(element, w=16, h=9) {
    element.style.height = h*element.clientWidth/w+'px';
}


const image_path = '/images';
const current_page_path = getPagePath();

setTimeout(() => {
    let donorboxes = document.getElementsByName('donorbox');
    for(let donorbox of donorboxes) {
        if(donorbox.src.includes('only_donor_wall')) {
            continue;
        }
        donorbox.width = '100%';
        donorbox.height = '750px';
        donorbox.style = 'max-width: 400px; min-width: 250px;';
    }
}, 500);


/**
 * 
 * @param {String} tabContainer 
 * @param {String} desiredTab 
 */
function switchTab(tabContainerID, desiredTab) {
    let tabContainer = document.getElementById(tabContainerID);
    let tabs, content;
    for(let child of tabContainer.childNodes) {
        if(child.classList) {
            if(child.classList.contains('nav')) {
                tabs = child
            } else if (child.classList.contains('tab-content')) {
                content = child;
            }
        }
        if(tabs && content) {
            break;
        }
    }
    if(!tabs || !content) {
        console.log('tried to switch tabs in', tabContainerID, 'to', desiredTab, ' but could not locate', 'tabs:', tabs, 'or content:', content);
    }

    // sets the target tab button active
    for(let tab of tabs.childNodes) {
        for(let tabChild of tab.childNodes) {
            try {
                if(tabChild.getAttribute('data-bs-toggle') == 'pill') {
                    if(tabChild.getAttribute('data-bs-target').includes(desiredTab)) {
                        tab.classList.add('active');
                        tabChild.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                        tabChild.classList.remove('active');
                    }
                    break;
                }
            } catch {}
        }
    }

    // shows the target tab
    for(let tab of content.childNodes) {
        try {
            if (tab.getAttribute('role') == 'tabpanel') {
                if(tab.getAttribute('id') == desiredTab) {
                    console.log(tab.getAttribute('id'));
                    tab.classList.add('show');
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('show');
                    tab.classList.remove('active');
                }
            }
        } catch {}
    }
}


// let r = ''
// for(let s = 1; s<=6; s++) {
//     r+=`'2021 christmas outreach (${s}).jpg', `;
// }
// console.log(r);
