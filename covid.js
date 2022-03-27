
var date=[];
var nbCas=[];
 
var app = new Vue({
    el: ".app",
    data: {
        selectedCountry:"",
        begin:"2022-02-01",
        end:"2022-02-10",
        countries: [],
        covidData:[],
        periode:[],
        cases:[],
        lesDates:[],
        pageTitle:"",
        currentCases:""
    },
    mounted(){
        this.getCountries();
        //this.getCovidData();
    },
    methods:{
        getCountries(){
            let CountriesUrl = "https://api.covid19api.com/countries";
            axios
            .get(CountriesUrl)
            .then(response => {
                this.countries = response.data;
            });       
        },
        getCovidData(){
            if(this.selectedCountry === ""){
                alert("Please select a country");
                return;
            }
            else if(this.begin==""){
                alert("La date de début par défaut est le 01/01/2022");
               return;
            }
            var pBegin = this.begin.toString("yyyy-mm-dd");
            var pEnd = this.end.toString("yyyy-mm-dd");
            this.pageTitle="situation in "+this.selectedCountry+"  period : "+pBegin+" to "+ pEnd 
            console.log(pBegin);
            let dataUrl="https://api.covid19api.com/total/country/"+this.selectedCountry+"/status/confirmed?from="+pBegin+"T00:00:00Z&to="+pEnd+"T00:00:00Z";
            axios.get(dataUrl)
                .then(response => {
                    this.covidData = response.data;
                    this.cases = this.covidData.map((x) => x.Cases);
                    this.lesDates = this.covidData.map((x) => x.Date);
                    this.currentCases=this.cases[this.cases.length-1];
                    
                   console.log(this.currentCases);
                    myChart.config.data.labels = this.lesDates;
                    myChart.config.data.datasets[0].data = this.cases;
                    myChart.config.type = "line";
                    myChart.update();
                    //onsole.log(cases);
                    //console.log(lesDates);
                    
                });
        },
       
        }          
    
});
//chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['02-01-2022', '03-01-2022'],
        datasets: [{
            label: 'Number of Cases',
            data: [12, 19],
            backgroundColor:'blue',
            borderColor:'purple',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'number of Cases'
                }
              }]
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'COVID DATA VISUALIZATION'
          }
        } 
    }
});
/*************************** */