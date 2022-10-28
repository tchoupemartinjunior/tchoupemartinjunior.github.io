var app = new Vue({
    el: '#app',
    data: {

        locationUrl: "",
        city: "",
        weather: { current: "", location: "", },
        condition: {}
    },
    mounted: function() {
        this.init();
    },

    methods: {


        init() {

            var url = "https://api.weatherapi.com/v1/current.json?key=fa3298ecc65740a5bb981803220802&q=Le mans&aqi=no";
            axios.get(url)
                .then(function(response) {
                        app.weather.current = (response.data.current);
                        app.weather.location = (response.data.location);
                        app.condition = response.data.current.condition;
                    }

                )
        },

        getWeather() {

            var url = "https://api.weatherapi.com/v1/current.json?key=fa3298ecc65740a5bb981803220802&q=" + app.city + "&aqi=no";
            axios.get(url)
                .then(function(response) {
                        app.weather.current = (response.data.current);
                        app.weather.location = (response.data.location);
                        app.condition = response.data.current.condition;
                    }

                )
        }
    }

});