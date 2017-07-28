
//Restituisce la posizione dell'elemento passato come parametro
function getPosition(elem){
    var r = elem.getBoundingClientRect();
    return r.top;
}

var fadeOutRange = -20; //Posizione di uscita del titolo


window.onload = function(){
    
    //Array di elementi che verranno raggiungi dallo scroll
    var title = document.getElementsByClassName('indexjs');
    elementi = [];
    //Titoli dei tag .indexjs che faranno parte dell'indice
    var titoli = document.getElementsByClassName('indexjs_title');
    var posY = 0;   //Posizione Y di ogni .indexjs
    
    for(var i=0; i<title.length; i++){
        
        posY = getPosition(title[i]);
        
        //Definisco l'oggetto che contiene tutti i dati rilevati
        elementi[i] = {
            tag:title[i],
            h:posY,
            son:titoli[i],
        }
        
        posY = 0;
    }
}




window.onscroll = function(){
    var s = "";     //DA ELEMINARE
    
    for(var i=0; i<elementi.length; i++){
        elementi[i].h = getPosition(elementi[i].tag);   //Aggiorno la posizione di ogni elemento
        
        s += elementi[i].h + ' ';       //DA ELEMINARE 
        document.getElementById('esito').innerHTML = s;     //DA ELEMINARE
        
        //Se l'elemento è nel range, allora viene selezionato
        if(elementi[i].h - window.innerHeight < 0 && elementi[i].h > fadeOutRange){  
            elementi[i].son.classList.add('color'); //Setto l'animazione di entrata
            
        } else {
            elementi[i].son.classList.remove('color');
        }
    }
}




//http://jsfiddle.net/QxYDe/4/





