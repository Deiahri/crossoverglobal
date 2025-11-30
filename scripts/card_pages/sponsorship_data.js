const sponsorship = [
    {
        "title": "Send Valentine to University",
        "sponsee": "Valentine",
        "country": "Nigeria",
        'desc': 'Being cared for since secondary school, he also needs our sponsorship while he is in his final years of schooling.',
        "image": "valentine.jpg",
        "sponsee_desc": "Valentine is another child of Crossover. He's been cared for by Crossover since his secondary school. He attends Anambra state university, in hopes of working in the [some field name] field.",
        "sponsee_request_desc": `
        Valentine has requested our aid in order to pay for his school dues.<br><br>
        
        <ul>
            <li>School Fees:130,000 Naira</li>
            <li>Acceptance fee: 26,000 Naira</li>
            <li>Matric Fee:3,000 Naira</li>
            <li>Hostel (Housing) fee:100,000 Naira</li>
            <li>Department due:10,000 Naira</li>
            <li>Faculty Due:2,050 Naira</li>
            <li>Fossa: 1,050</li>
            <li>General Studies: 7,500 Naira</li>
            <li>Departmental Levy: 20,000 Naira</li>
            <li>Security Fee:500 Naira</li>
        
        </ul><br>
        Total amount: 300,100 Naira (Approximately $722 USD)
        
        Please note that these are estimates, and some items are not listed. The final cost cannot be definitely determined. <br>
        As time progresses, we will update this as information comes.
        `,
        'sponsee_request_video': 'https://www.youtube.com/embed/2UBTLLCrymM?si=WFgZA3CR61JjhdOf',
        "donorbox_code": `<script src="https://donorbox.org/widget.js" paypalExpress="true"></script><iframe src="https://donorbox.org/embed/charlie-med-school-fund-2" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"></iframe>`,
        "encouragement": "Help Valetine continue his education. Even if its only a dollar, everything counts.",
        'share_links': [
            ['whatsapp.svg', 'https://api.whatsapp.com/send?phone=&text=help%20CrossoverGlobal%20send%20Charlie%20To%20Med%2-school!%20https://www.crossoverglobal.org/sponsorship/send-charlie-to-med-school'],
            ['facebook.svg', 'https://www.facebook.com/sharer/sharer.php?u=https://www.crossoverglobal.org/sponsorship/send-charlie-to-med-school']
        ],
        'optional_sections': [
            ['Proof of registration', 
                `This is Valentine's Admissions Paper.<br>
                <img src='${image_path_sponsorship}/valentine-admission.jpg' style='width: 90%; object-fit: cover;'>`
            ],
            ['Tuition Invoice', 
                `This is Valentine's Tuition Invoice.<br>
                <img src='${image_path_sponsorship}/valentine-tuition-invoice.jpg' style='width: 90%; object-fit: cover;'>`
            ],
        ],
        'complete': true
    },
    {
        "title": "Send Stephen to University",
        "sponsee": "Stephen",
        "country": "Nigeria",
        'desc': 'Stephen is a final year student at his university, and he needs our financial assistance to finish school.',
        "image": "stephen.jpg",
        "sponsee_desc": "Valentine is another child of Crossover. He's been cared for by Crossover since his secondary school. He attends Anambra state university, in hopes of working in the [some field name] field.",
        "sponsee_request_desc": `
        Stephen is a final year student of Federal Polytechnic Nekede, and he needs our financial assistance to finish school.<br><br>
        He needs 129,800 Niara, which is equivalent to about $320<br>
        <ul>
            <li>Textbooks cost 31,000 Niara</li>
            <li>Projects cost 24,000</li>
            <li>Laptop is around ~75,000 Niara.</li>
        </ul>
        He needs to have all of this paid by November 2022 so he may continue working on his degree.`,
        'sponsee_request_video': 'https://www.youtube.com/embed/BHLtexvwZXg?si=3AQZscwWr2MlUHq1',
        "donorbox_code": `<script src="https://donorbox.org/widget.js" paypalExpress="true"></script><iframe src="https://donorbox.org/embed/stephens-university-fund" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important"></iframe>`,
        "encouragement": "Give Stephen opportunity to be able to support himself one day! Your donation could mean future prosperity for Stephen.",
        'share_links': [
            ['whatsapp.svg', 'https://api.whatsapp.com/send?phone=&text=help%20CrossoverGlobal%20send%20Stephen%20To%20University!%20https://www.crossoverglobal.org/sponsorship/send-stephen-to-university'],
            ['facebook.svg', 'https://www.facebook.com/sharer/sharer.php?u=https://www.crossoverglobal.org/sponsorship/send-stephen-to-university'],
            ['youtube.svg', 'https://www.youtube.com/watch?v=BHLtexvwZXg']
        ],
        'optional_sections': [
            ['Other information', 
                `This is Stephen's Admission Letter; Proof that Stephen has been offered to his university- Federal Polytechnic, Nekede.<br>
                <img src='${image_path_sponsorship}/stephen-admission.jpg' style='width: 90%; object-fit: cover;'>`
            ]
        ],
        'complete': true
    }
];

/*
    {
        'title': 'tomura',
        'image': 'african_woman_store.jpg',
        'state': 'Nigeria',
        'desc': 'ahahahahahaha,sak sjdasjdajsdjasdhsbad hasdbasbasjd basjhdb askh daskjh dbaskbh d',
        'deadline': '',
        'sponsee': '',
        'sponsee_photo': '',
        'desc': '',
        'sponsee_request_desc': '',
        'sponsee_request_video': '',
        'donorbox': '',
        'encouragement': '',
        'share_links': [
            ['whatapp.svg', 'link'],
            ['facebook.svg', 'link']
        ],
        'optional_areas': [
            ['', ``],
            ['', ``]
        ],
        'complete': false,
        'completion_video': '',
        'completion_desc': '',
        'completion_date': '',
        'thank_you_message': ''
    }
*/


const available_sponsorship_filters = [
    {
        'name': 'Complete',
        'class': 'filter_btn',
        'style': '',
        'filter': 'complete',
        'deactivators': ['complete2'],
        'value': false
    }
    // ,{
    //     'name': 'Complete',
    //     'class': 'filter_btn',
    //     'style': '',
    //     'filter': 'complete2',
    //     'deactivators': ['complete'],
    //     'value': true
    // }
];
