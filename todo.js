window.onload = function () {
    let creerBut = document.getElementById("creer");
    let date = document.getElementById("date")
    let dateVal = document.getElementById("dateVal");
    let valider= document.getElementById("valider");
    let list = document.getElementById("list");
    let enregistrer=document.getElementById("enregistrer");
    let ajouter=document.getElementById("ajouter");
    let tache1 = document.getElementById("tache");
    let listElt = document.getElementById("list-element");
    creerBut.addEventListener("click", () => {
        date.style.display = "block";    
    })

   valider.addEventListener("click",  () => {
       if(date.value == null){
    let titre = document.createElement('h1');
    titre.textContent="Liste du "+ dateVal.value;
    list.appendChild(titre); 
    enregistrer.style.display="block";
    ajouter.style.display="inline-block";
    tache.style.display="inline-block";
       }
       else{
        alert("veuillez entrer une date");
       }
});


    ajouter.addEventListener("click",()=>{
        if(tache1.value!=""){
        let lb = document.createElement('li');
        lb.textContent= tache1.value;
        list.appendChild(lb);
        tache1.value="";
        
        }
        else{
            tache1.style.borderColor = "red";
            tache1.style.border ="20px";
            alert("veuillez entrer une tache");
           
        }
       
    })

    function imprimer(divName) {
        let printContents = divName.innerHTML;    
     let originalContents = document.body.innerHTML;      
     document.body.innerHTML = printContents;     
     window.print();     
     document.body.innerHTML = originalContents;
     }

     enregistrer.addEventListener("click", ()=>{
        let printContents = list.innerHTML;    
        let originalContents = document.body.innerHTML;      
        document.body.innerHTML = printContents;     
        window.print();     
        document.body.innerHTML = originalContents;
        location.reload();
     });  
}