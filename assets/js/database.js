const base_url = "https://tchoupemartinjunior.github.io/";
const base_url2 = "https://github.com/tchoupemartinjunior/"
var app = new Vue({
    el: '#portfolio',
    data: {
        projects: [{
                id: 1,
                nom: 'SECURE FLEET',
                technos: 'Vue Js, Bootstrap, Express Js, PostgreSql Google Map, Arduino',
                url: 'https://avossevou.eu/',
                img: 'assets/img/portfolio/sf-home.png',
                more_images: [],
                description: 'Tracking application for cars, real-time display of GPS position, speed, and engine status',
                date: 'June 2022'

            },
            {
                id: 1,
                nom: 'SECURE FLEET Showcase website',
                technos: 'Wordpress',
                url: 'https://avossevou.eu/',
                img: 'assets/img/portfolio/sf-sc_home.png',
                more_images: [],
                description: 'Showcase website of the Secure Fleet project',
                date: 'March 2022'

            },
            {
                id: 1,
                nom: 'TELEGRAMM CHATBOT',
                technos: 'Spring Boot',
                url: base_url2 + 'TelegramSpringAPI',
                img: 'assets/img/portfolio/chatbot.jpg',
                more_images: [],
                description: 'Gives the weather condition of the town and also give jokes, depending on the message recieved from the user ',
                date: 'May 2022'

            },
            {
                id: 2,
                nom: 'Covid data visualisation',
                technos: 'CHARTS JS, VUE JS, HTML , CSS, BOOTSTRAP',
                url: base_url + 'covid-app/covid.html',
                more_images: [],
                description: "Statistics on the number of covid cases by country",
                img: 'assets/img/portfolio/covid_data.jpg',
                date: 'October 2021'
            },

            {
                id: 1,
                nom: 'Car & Pedestrian detection',
                technos: 'PYTHON, OPENCV',
                url: base_url2 + 'Car-detection-App',
                img: 'assets/img/portfolio/car-detection.jpg',
                more_images: [],
                description: 'Detection of cars and pedestrians using artificial intelligence',
                date: 'March 2022'

            },
            {
                id: 1,
                nom: 'Face detection',
                technos: 'PYTHON, OPENCV',
                url: base_url2 + 'Face-recognition-App-with-Pyhton-OpenCV',
                img: 'assets/img/portfolio/face-detection.jpg',
                more_images: [],
                description: 'Face detection application',
                date: 'March 2022'

            },
            {
                id: 3,
                nom: 'Weather App',
                technos: 'VUE JS, HTML , CSS, BOOTSTRAP',
                url: base_url + 'weather/weatherApp.html',
                more_images: [],
                img: 'assets/img/portfolio/weather.jpg',
                date: 'October 2021'
            },
            {
                id: 4,
                nom: 'Deezer',
                technos: 'IONIC VUE JS',
                url: base_url2 + 'DeezerApp-Ionic_VueJs',
                description: 'Music mobile app',
                more_images: [],
                img: 'assets/img/portfolio/deezer1.jpg'
            },
            {
                id: 4,
                nom: 'Calculatrice',
                technos: ' HTML , CSS, BOOTSTRAP',
                url: base_url + 'calculator/calculator.html',
                more_images: [],
                img: 'assets/img/portfolio/calculatrice.jpg'
            },
            {
                id: 2,
                nom: 'Address Localisation app',
                technos: 'SPRING BOOT',
                url: base_url2 + 'GPS-Weather-App',
                more_images: [],
                description: "Finds the gps position of an address and at the same time the weather conditions at this place",
                img: 'assets/img/portfolio/geoloc.jpg'
            },


            {
                id: 4,
                nom: 'To-do list',
                technos: 'HTML, CSS , JAVASCRIPT',
                url: base_url + 'to-do/todo.html',
                img: 'assets/img/portfolio/to-do.jpg'
            },



        ]

    },
    methods: {

    }

});
var skills_vue = new Vue({
    el: '#skills',
    data: {
        front_end: [{
                id: 1,
                name: 'HTML, CSS, BOOTSTRAP',
                rate: 90,
            },
            {
                id: 2,
                name: 'Vue Js',
                rate: 80,
            },
            {
                id: 3,
                name: 'Angular',
                rate: 60,
            },
            {
                id: 4,
                name: 'Ionic',
                rate: 60,
            },
            {
                id: 4,
                name: 'Kotlin',
                rate: 40,
            },
            {
                id: 5,
                name: 'Wordpress (cms)',
                rate: 80,
            },


        ],
        back_end: [{
                id: 1,
                name: 'spring boot (java)',
                rate: 70,
            },
            {
                id: 1,
                name: 'Express js (node js)',
                rate: 50,
            },
            {
                id: 1,
                name: 'Flask, Django (python)',
                rate: 30,
            },
            {
                id: 1,
                name: 'Mysql, postgresql',
                rate: 70,
            },
        ],
        IoT: [{
                id: 1,
                name: 'Digital Telecommunication',
                rate: 70,
            },
            {
                id: 1,
                name: 'Digital an analog electronics',
                rate: 50,
            },
            {
                id: 1,
                name: 'Signal processing',
                rate: 30,
            },


        ],
        AI: [{
                id: 1,
                name: 'Python',
                rate: 70,
            },
            {
                id: 1,
                name: 'Opencv',
                rate: 40,
            }

        ]

    },
    methods: {


    }

});