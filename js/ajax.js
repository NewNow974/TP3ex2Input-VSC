
function updateTime(date){
    /*document.getElementById('detail').innerHTML = date;*/
    //console.log(date);
    document.getElementById("title").innerHTML = date[0];
    document.getElementById("detail").innerHTML = " hours :" +date[1]["hours"] + "<br>" + "minutes : " + date[1]["minutes"] + "<br>" + " secondes : " + date[1]["seconds"] + "<br>";
    
}

function errorsMSG(status){
    console.log("errors ..."+ status);
    
    document.getElementById('errors').innerHTML = status;
    document.getElementById('errors').style.display = "block";
}


function ajaxRequest(type, url, callback)
{
   
    let xhr = new XMLHttpRequest();        
    
    xhr.open(type,url);
    xhr.onload = () => {
        switch(xhr.status){
            case 400: errorsMSG('Requête incorrecte');
            break;
            case 401: errorsMSG('Authentifiez vous');
            break;
            case 403: errorsMSG('Accès refusé');
            break;
            case 404: errorsMSG('Page non trouvée');
            break;
            case 500: errorsMSG('Erreur interne du serveur');
            break;
            case 503: errorsMSG('Service indisponible');
            break;
            case 200 :
            let data = xhr.responseText;
            //console.log( data);  
            let decod = JSON.parse(data);
            console.log(decod);
            callback(decod);
            displayClock(decod[1]);
            
            
            break;
            default : console.log('HTTP error:'+ xhr.status); 
        }
    };
    xhr.send();
}


function main(){

    // http://localhost/TP%20Visual/TP3Input/

    setInterval(ajaxRequest,500,'GET','php/time.php',updateTime);
}
main();