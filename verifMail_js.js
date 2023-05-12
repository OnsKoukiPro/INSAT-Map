const email = document.getElementById('email');
const maxCount = 3;
function validateMail() {


    // Récupérer les éléments du formulaire

const email = document.getElementById('email');

    // Valider les champs du formulaire


    if (!(email.value.endsWith("@insat.ucar.tn") || email.value.endsWith("@insat.u-carthage.tn"))) {
        alert('Veuillez entrer votre adresse mail institutionnel ! \n (qui se termine par "@insat.ucar.tn" ou "@insat.u-carthage.tn")');
        email.focus();
        return false;
    }
    return true;
}


function validateCode( count ) {

}