
window.onload=function(){
let ville = document.getElementById("ville");
let mPays = document.getElementById("pays");
let temperature = document.getElementById("temperature");
let mville = document.getElementById("mVille");
let afficher = document.getElementById("afficher");


afficher.addEventListener("click",()=>{

let url ="https://api.weatherapi.com/v1/current.json?key=fa3298ecc65740a5bb981803220802&q="+ville.value+"&aqi=no";
fetch(url)
  .then(resultat=> resultat.json())
  .then(json => {
      console.log(json);
    const maville=json.location.name;
    const country = json.location.country;
    const hummidity = json.current.humidity;
    console.log(maville); 
    mville.innerHTML=(maville+"-"+country);
    temperature.innerHTML= "Température : "+(json.current.temp_c)+"°C"+'<br>'+"Humidité :"+hummidity+"%";
   
    
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
})
}
