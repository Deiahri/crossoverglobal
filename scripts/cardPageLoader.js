/* 
    projects, sponsorships, and good news are very similar.
    The biggest difference across these tabs are the data they load in, and certain images and components.
    This will be binded to a page called search.
    Using the parameters passed to the page, specifically the "type" parameter, we can determine
    what kind of data we should be loading in
*/


let dataScript = document.createElement('script');
body.appendChild(dataScript);
let header_desc = document.getElementById('header_desc');
let header_title = document.getElementById('header_title');
let header_image_div = document.getElementById('header_image_div');
let page_type = getPageParameters().type;

let search_bar = document.getElementById('search_bar');
let search_bar_header = document.getElementById('search_bar_header');

if (page_type == 'good_news') {
    document.title = 'Good News';
    search_bar.setAttribute('placeholder', 'Good News Name');
    search_bar_header.innerHTML = 'Search for Good News';

    dataScript.src = '/scripts/card_pages/good_news_data.js';

    header_title.innerHTML = 'Good News';
    header_desc.innerHTML = `Learn about good news and the works of crossover`;
    header_image_div.style.backgroundImage = `URL('../images/happykids1.png')`;

    dataScript.onload = () => {
        build_projects(good_news, available_goodnews_filters, '/good-news/page');
        used_data = good_news;
        used_filters = available_goodnews_filters;
    }
} else if (page_type == 'projects') {
    document.title = 'Projects';
    search_bar.setAttribute('placeholder', 'Project Name');
    search_bar_header.innerHTML = 'Search for a Project';
    
    document.getElementById('any_project').classList = '';
    
    header_title.innerHTML = 'Projects';
    header_desc.innerHTML = `Information, Impact, and how to help, all in one place.
    Press <b style="font-weight: bold;">LEARN MORE</b> for more information about a project`;
    header_image_div.style.backgroundImage = `URL('../images/little-girls.png')`;
    
    dataScript.src = '/scripts/card_pages/project_data.js';
    dataScript.onload = () => {
        build_projects(projects, available_project_filters, '/projects/page');
        used_data = projects;
        used_filters = available_project_filters;
    };
} else if (page_type == 'sponsorship') {
    document.title = 'Sponsorship';
    search_bar.setAttribute('placeholder', 'Sponsee Name');
    search_bar_header.innerHTML = 'Search for a Sponsee';

    dataScript.src = '/scripts/card_pages/sponsorship_data.js';
    document.getElementById('sponsorship_inspo').classList = '';
    header_title.innerHTML = 'Sponsor';
    header_desc.innerHTML = `The Youth - Our Future`;
    header_image_div.style.backgroundImage = `URL('../images/school-boys-2.jpg')`;

    dataScript.onload = () => {
        build_projects(sponsorship, available_sponsorship_filters, '/sponsorship/page');
        used_data = sponsorship;
        used_filters = available_sponsorship_filters;
    };
}

