
document.getElementById('title').innerHTML = sponsorship.title;
let sponsorship_title = getPageParameters().title;

document.title = `Sponsor - ${sponsorship_title}`;

let current_sponsorship_data = null;
for(let sponsorship_data of sponsorship) {
    if(sponsorship_data.title.toLowerCase().trim() == sponsorship_title.toLowerCase().trim()) {
        current_sponsorship_data = sponsorship_data;
        break;
    }
}


document.getElementById('title').innerHTML = current_sponsorship_data.title;
document.getElementById('country').innerHTML = current_sponsorship_data.country;

document.getElementById('sponsee_photo').src = `${image_path_sponsorship}/${current_sponsorship_data.image}`;
document.getElementById('sponsee_name').innerHTML = current_sponsorship_data.sponsee;
document.getElementById('sponsee_desc').innerHTML = current_sponsorship_data.sponsee_desc;

document.getElementById('sponsee_name_head').innerHTML = current_sponsorship_data.sponsee;
if(current_sponsorship_data.sponsee_request_video) {
    resize_iframe(document.getElementById('sponsee_video_container').children[0]);
    document.getElementById('sponsee_video_container').children[0].src = current_sponsorship_data.sponsee_request_video;
    document.getElementById('sponsee_video_container').classList = '';
    document.getElementById('sponsee_video_container').children[0].onload = resize_iframe(document.getElementById('sponsee_video_container').children[0]);
}
document.getElementById('request_desc').innerHTML = current_sponsorship_data.sponsee_request_desc;

document.getElementById('donorbox_code').innerHTML = current_sponsorship_data.donorbox_code;

document.getElementById('encourangement').innerHTML = current_sponsorship_data.encouragement;

if(current_sponsorship_data.share_links) {
    let share_links = document.getElementById('share_links');
    share_links.innerHTML = '';
    for(let link of current_sponsorship_data.share_links) {
        share_links.innerHTML += `
        <a href="${link[1]}" style="margin-right: 5px; width: 36px; height: 36px; padding: 3px; background-color: white; border-radius: 12px; display: inline-flex; justify-content: center; align-items: center;" target="_blank">
            <img src="/images/${link[0]}" style="width: 100%; height: 100%;">
        </a>
        `
    }
}

if(current_sponsorship_data.optional_sections) {
    let optional_sections = document.getElementById('optional_sections');
    optional_sections.innerHTML = '';
    for(let optional_section of current_sponsorship_data.optional_sections) {
        optional_sections.innerHTML += `
            <div style="width: 100%">
                <hr style="margin-left: 7rem; margin-right: 7rem;">
                <div style="margin-top: 20px; margin-bottom: 20px;">
                    <div class="row" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
                        <div style="display: flex; flex-direction: row;" class="col-12 col-lg-8 mb-2">
                            <p class="fs-700 fw-bold" style="margin-bottom: 0px;">${optional_section[0]}</p>
                        </div>
                        <div style="display: flex; flex-direction: row;" class="col-12 col-lg-8 mb-2">
                            <p class="fs-500" style="margin-bottom: 0px;">${optional_section[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

if(current_sponsorship_data.complete) {
    document.getElementById('top_completion_badge').classList = '';
}
