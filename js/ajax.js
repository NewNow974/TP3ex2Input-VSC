
function updateTime(date){
    document.getElementById('detail').innerHTML = date;
    console.log(date);
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
            case 200 : callback(xhr.responseText);
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