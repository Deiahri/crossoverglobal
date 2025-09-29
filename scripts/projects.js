class project_card {
    constructor(page_path, project_data) {
        this.element = project_card.build_element(page_path, project_data);
    }

    static build_element(page_path, pd) {
        let element = document.createElement('div');
        element.classList = 'col-12 col-xxl-2 col-lg-3 col-md-4 col-sm-6 hideable'
        element.style = 'padding: 5px;';
        element.innerHTML = `
        <div class='drop-shadow light-grey-bg' style='border-radius: 5px; padding: 10px; width: 100%; position: relative'>
            <div>
                <h1 class="fs-600 fw-bold lh-600 co-blue-bg" style="color: white; padding:6px; box-shadow: 5px 0px 0px grey; margin-left: -5px; margin-top: 0px; display: inline-block;">${pd.title}</h1>
            </div>
            ${pd.complete? `
            <div>
                <h2 class="fs-400 lh-500 fw-bold" style="background-color: green; color: white; padding:4px; box-shadow: 5px 0px 0px grey; margin-left: -5px; margin-top: 0px; display: inline-block;">Complete!</h2>
            </div>`:''
            }
            <img style="width: 100%; margin-top: 2px; height: 200px; object-fit: cover; content: url('/images${page_path.substring(0, page_path.lastIndexOf('/'))}/${pd.image}');">
            ${pd.location?`<p class="fs-400 fw-bold" style="margin: 0px; margin-top: 4px">${pd.location}</p>`:''}
            <p class="fs-400" style="margin: 0px; margin-top: 4px; margin-bottom: 40px">${pd.desc}</p>
            <a class="btn rounded-pill fw-bold mt-1" style="position: absolute; left: 10px; bottom: 10px; background-color: blue; color: white;" href="${page_path}/?title=${pd.title.toLowerCase()}">Learn More</a>
        </div>
        `
        return element;
    }
}

let card_area = document.getElementById('card_area');
function build_projects(given_projects, given_filters, page_path) {
    try{
        for(let project of given_projects) {
            if(project.not_searchable) {
                continue;
            }
            let project_element = new project_card(page_path, project).element;
            card_area.appendChild((project_element));
            project.element = project_element;
        }
    
        let project_filters = document.getElementById('project_filters');
        for(let filter of given_filters) {
            let filter_button = document.createElement('div');
            filter_button.classList = 'hover-cursor '+filter.class+(filter.value?' active':'');
            filter_button.style = filter.style;
            filter_button.setAttribute('filter', filter.filter);
            filter_button.setAttribute('deactivators', filter.deactivators);
            filter_button.innerHTML = filter.name;
            filter_button.onclick = toggle_filter.bind(null, filter_button);
            project_filters.appendChild(filter_button);
            filter.element = filter_button;
        }
    } catch {}
}

function toggle_filter(filter_button) {
    let filter_name = filter_button.getAttribute('filter');
    let current_filter_info = null;
    for(let filter of used_filters) {
        if(filter.filter == filter_name) {
            current_filter_info = filter;
            break;
        }
    }

    let filter_state = !current_filter_info.value;

    if(filter_state) {
        // sees if any other filter is deactivated by this one
        for(let filter of used_filters) {
            if(current_filter_info.deactivators.includes(filter.filter)) {
                filter.value = false;
                filter.element.classList.remove('active');
            }
        }
    }

    current_filter_info.value = filter_state;
    filter_state? filter_button.classList.add('active'):filter_button.classList.remove('active');
    show_search_results(document.getElementById('search_bar').value);
}

let used_data;
let used_filters;
function show_search_results(search=null) {
    search = search.toLowerCase();
    for (let project of used_data) {
        let showCurrentProject = true;
        if(project.not_searchable) {
            continue;
        }
        else if(!search || project.title.toLowerCase().includes(search)) {
            for(let filter of used_filters) {
                if(filter.value) {
                    if(!project[filter.filter]) {
                        showCurrentProject = false;
                    }
                }
            }
        } else {
            showCurrentProject = false;
        }
        display_element(project.element, showCurrentProject);
    }
}

