let parameters = getPageParameters();

let project_data = find_project_with_name(parameters.title);

document.title = `Project - ${project_data.title}`;

function find_project_with_name(name) {
    for (let project of projects) {
        if (project.title.toLowerCase().trim() == name.toLowerCase().trim()) {
            return project;
        }
    }
}

function build_project_page(project_data) {
    document.getElementById('title').innerHTML = project_data.title;
    document.getElementById('title2').innerHTML = project_data.title;

    let top_section_div = document.getElementById('top_section_div');
    top_section_div.style.backgroundImage = `URL('${image_path_project}/${project_data.image}')`;

    let overview_section = document.getElementById('overview_section');
    if(project_data.overview_video) {
        let vid = document.createElement('div');
        if(file_type(project_data.overview_video) == 'video') {
            vid.innerHTML = `
            <a style="padding: 5px;" href="${image_path_project}/${project_data.overview_video}" data-toggle="lightbox">
                <video style="width: 100%; max-width: 700px;" src="" type="video/${get_file_ext_type(project_data.overview_video)}" style="position: relative;"></video>
            </a>`;
        } else if (file_type(project_data.overview_video) == 'youtube') {
            vid.innerHTML = `
            <a style="padding: 5px; width: 100%" href="${project_data.overview_video}" data-toggle="lightbox">
                <iframe style="width: 100%; height: auto;" src="${project_data.overview_video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" onload="resize_iframe(this)" allowfullscreen></iframe> 
            </a>`;
        } else {
            console.log('unrecognized overview video type', file_type(project_data.overview_video));
        }
        overview_section.appendChild(vid);
    } else {
        overview_section.classList = 'hideable fullHide';
    }

    let long_desc = document.getElementById('long_desc');
    long_desc.innerHTML = project_data.long_desc;

    let goals = document.getElementById('goals');
    goals.innerHTML = project_data.goals;

    let pre_project_photo_button = document.getElementById('pre_project_photo_button');
    if(project_data.pre_project_photos) {
        pre_project_photo_button.classList.remove = 'hideable';
        let pre_project_photos = document.getElementById('pre_project_photos');
        pre_project_photos.innerHTML = '';
        
        pre_project_photo_button.href = image_path_project+'/'+project_data.pre_project_photos[0];
        for(let photo of project_data.pre_project_photos.slice(1)) {
            pre_project_photos.innerHTML += `<a style="padding: 5px;" href="${image_path_project}/${photo}" data-toggle="lightbox" data-gallery="pre_project_photos"></a>`;
        }
    } else {
        pre_project_photo_button.classList = 'hideable fullHide';
    }

    if(project_data.donorbox_code && !project_data.complete) {
        document.getElementById('donorbox_container').innerHTML = project_data.donorbox_code;
    }

    if(project_data.donorbox_wall) {
        document.getElementById('donorbox_wall_container').innerHTML = project_data.donorbox_wall;
    }

    if(project_data.bible_verse_content) {
        document.getElementById('bible_verse_content').innerHTML = project_data.bible_verse_content;
        document.getElementById('bible_verse_CV').innerHTML = project_data.bible_verse_CV;
    }

    document.getElementById('amount_raised').innerHTML = project_data.amount_raised ? project_data.amount_raised: '$0';
    if(project_data.impacts) {
        document.getElementById('nothing_yet').classList = 'hideable fullHide';

        let impact_section = document.getElementById('impact_section');
        let thank_you_section_NV = document.getElementById("thank_you_section_NV");
        
        impact_section.innerHTML = '';
        thank_you_section_NV.innerHTML = '';
        for(let impact of project_data.impacts) {
            let images = '';
            for(let image of impact[3]) {
                if(file_type(image) == 'image') {
                    images += `
                    <a style="padding: 5px;" href="${image_path_project}/${image}" data-toggle="lightbox" data-gallery="${impact[1]}-photos">
                        <img style="object-fit: cover; width: 8rem; height: 8rem;" src="${image_path_project}/${image}">
                    </a>
                    `;
                } else if(file_type(image) == 'video') {
                    images += `
                    <a style="padding: 5px; object-fit: cover" href="${image_path_project}/${image}" data-toggle="lightbox">
                        <video style="object-fit: cover; width: 8rem; height: 8rem" src="${image_path_project}/${image}" type="video/${get_file_ext_type(image)}" style="position: relative;"></video>
                    </a>
                    `;
                } else {
                    console.log('found impact image of an unrecognized type, file name:', image, file_type(image));
                }
            }
            impact_section.innerHTML += `
            <div class="row" style="max-width: 1400px; margin-bottom: 20px">
                <div class="col-12 col-md-6" style="display: flex; flex-direction: column;"> 
                    <div style="display: flex; flex-direction: row;">
                        <p class="fs-600 fw-bold" style="margin: 0px; margin-right: 0.5rem;">${impact[0]}</p>
                        <p class="fs-600" style="margin: 0px; font-style: italic;">${impact[1]}</p>
                    </div>
                    <p class="fs-500">${impact[2]}</p>
                </div>
                <div class="col-12 col-md-6" style="display: flex; align-items: top; justify-content: left; flex-wrap: wrap"> 
                    ${images}
                </div>
            </div>
            `;
            thank_you_section_NV.innerHTML += `
            <div style="display: inline-flex;">
                <p class="fs-500" style="margin: 0px; margin-right: 5px">${impact[0]}</p>
                <p class="fs-500 fw-bold" style="margin: 0px; margin-right: 5px; font-style: italic;">${impact[1]}</p>
            </div>
            `;
        }

    } else {
        document.getElementById('nothing_yet').classList = '';
        document.getElementById('impact_section').classList = 'hideable fullHide'
    }


    if(project_data.post_project_photos) {
        let post_project_photos = document.getElementById('post_project_photos');
        post_project_photos.classList = '';

        let impact_gallary = document.getElementById('impact_gallary');
        impact_gallary.innerHTML = '';
        for(let image of project_data.post_project_photos) {
            

            if(file_type(image) == 'image') {
                impact_gallary.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="padding: 5px;">
                    <a href="${image_path_project}/${image}" data-toggle="lightbox" data-gallery="post-project-photos">
                        <img style="object-fit: cover; width: 100%; height: 300px;" src="${image_path_project}/${image}">
                    </a>
                </div>`;
            } else if(file_type(image) == 'video') {
                impact_gallary.innerHTML += `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3" style="padding: 5px;">
                    <a style="object-fit: cover" href="${image_path_project}/${image}" data-toggle="lightbox">
                        <video style="object-fit: cover; width: 100%; height: 300px" src="${image_path_project}/${image}" type="video/${get_file_ext_type(image)}"></video>
                    </a>
                </div>`;
            } else {
                console.log('found impact image of an unrecognized type, file name:', image, file_type(image));
            }
        }
    } else {
        document.getElementById('post_project_photos').classList = 'hideable fullHide';
    }

    document.getElementById('completion_notes').innerHTML = project_data.completion_notes;

    if(project_data.complete) {
        document.getElementById('thank_you_section').classList = '';
        document.getElementById('how_you_can_help_incomplete').classList = 'hideable fullHide';
        document.getElementById('how_you_can_help_complete').classList = '';
        document.getElementById('top_completion_badge').classList = '';
        document.getElementById('donorbox_container').classList = 'hideable fullHide';
        document.getElementById('completion_notes_section').classList = '';
        document.getElementById('alternative_donate_options').classList = 'hideable fullHide';
    } else {
        document.getElementById('thank_you_section').classList = 'hideable fullHide';
        document.getElementById('how_you_can_help_incomplete').classList = '';
        document.getElementById('how_you_can_help_complete').classList = 'hideable fullHide';
        document.getElementById('top_completion_badge').classList = 'hideable fullHide';
        document.getElementById('donorbox_container').classList = '';
        document.getElementById('completion_notes_section').classList = 'hideable fullHide';
    }
}

build_project_page(project_data);
/*
    title
    image
    desc
    location
    video overview
    long description
    goals
    pre-project photos
    post-project photos
    donorbox code
    donorbox wall
    bible verse
    bible verse (chapter:verse)
    funds raised
    impact one quantity
    impact one verb
    impact one description
    impact one media
    [implement the above with an array]

    complete
    completition date
    completion notes

    volunteering opportunities
*/
