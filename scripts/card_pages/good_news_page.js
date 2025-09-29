let good_news_name = getPageParameters().title;


let current_good_news;
for(let obj of good_news) {
    if(obj.title.trim().toLowerCase() == good_news_name.trim().toLowerCase()) {
        current_good_news = obj;
        break;
    }
}

document.getElementById('title').innerHTML = current_good_news.title;
document.title = `Good News - ${current_good_news.title}`;

if (current_good_news.overview_media) {
    let overview_media = document.getElementById('overview_media');
    overview_media.classList = '';
    if (current_good_news.overview_media.toLowerCase().includes('youtube.com')) {
        overview_media.innerHTML = `
            <iframe style="width: 100%; height: auto;" src="${current_good_news.overview_media}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" onload="resize_iframe(this)" allowfullscreen></iframe> 
        `;
    } else {
        let media_type = file_type(current_good_news.media_type);
        if(media_type == 'video') {
            overview_media.innerHTML = `
                <video style="width: 100%; max-width: 700px;" src="${current_good_news.overview_media}" type="video/${get_file_ext_type(current_good_news.overview_media)}" style="position: relative;"></video>
            `
        } else if (media_type == 'image') {
            overview_media.innerHTML = `
                <img style="width: 100%; max-width: 700px;" src="${current_good_news.overview_media}" style="position: relative;">
            `
        } else {
            console.log('overview media type is not recognized');
        }
    }
}

document.getElementById('good_news_text').innerHTML = current_good_news.good_news_text;

let icon_size = '8rem';
if(current_good_news.other_media) {
    document.getElementById('other_media_title').style.display = 'inherit';
    let other_media = document.getElementById('other_media');
    other_media.innerHTML = '';
    for(let media of current_good_news.other_media) {
        let content = '';
        if(file_type(media) == 'youtube') {
            content = `
                <iframe style="width: ${icon_size}; height: ${icon_size}; object-fit: contain" src="${media}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" onload="resize_iframe(this)" allowfullscreen></iframe> 
            `;
        } else if (file_type(media) == 'video') {
            content = `
                <video style="width: ${icon_size}; height: ${icon_size}; object-fit: cover" src="${image_path_good_news}/${media}" type="video/${get_file_ext_type(media)}" style="position: relative;"></video>
            `;
        } else if (file_type(media) == 'image') {
            content = `
                <img style="width: ${icon_size}; height: ${icon_size}; object-fit: cover" src="${image_path_good_news}/${media}" style="position: relative;">
            `;
        }
        other_media.innerHTML += 
        `
        <div style="margin-bottom: 8px">
            <a style="padding: 5px;" href="${image_path_good_news}/${media}" data-toggle="lightbox" data-gallery="other_media">
                ${content}
            </a>
        </div>
        `;
    }
}
