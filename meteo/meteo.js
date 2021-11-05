
window.onload=function(){
let ville = document.getElementById("ville");
let mPays = document.getElementById("pays");
let temperature = document.getElementById("temperature");
let mville = document.getElementById("mVille");
let afficher = document.getElementById("afficher");


afficher.addEventListener("click",()=>{
let key = "fdf8a371822fd868f8806e703adacd4e"
let url ="http://api.weatherstack.com/current?access_key="+key+"&query="+ville.value;
fetch(url)
  .then(resultat=> resultat.json())
  .then(json => {
      console.log(json);
    const maville=json.location.name;
    const country = json.location.country;
    const hummidity = json.current.humidity;
    console.log(maville); 
    mville.innerHTML=(maville+"-"+country);
    temperature.innerHTML= "Température : "+(json.current.temperature)+"°C"+'<br>'+"Humidité :"+hummidity+"%";
   
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
})
}
