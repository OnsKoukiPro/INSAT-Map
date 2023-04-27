function validateForm() {


    // Récupérer les éléments du formulaire


//const form = document.querySelector('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');

const matricule = document.getElementById('matricule');
const password1 = document.getElementById('motdepasse');
const password2 = document.getElementById('confirmermotdepasse');
const accepterCheckbox = document.getElementById('accepter');



    // Valider les champs du formulaire
    if (nom.value === '') {
        alert('Veuillez saisir votre nom.');
        nom.focus();
        return false;
    }

    if (prenom.value === '') {
        alert('Veuillez saisir votre prénom.');
        prenom.focus();
        return false;
    }

    if (email.value === '') {
        alert('Veuillez saisir votre adresse email.');
        email.focus();
        return false;
    }

    if (matricule.value === '') {
        alert('Veuillez saisir votre matricule.');
        matricule.focus();
        return false;
    }

    if (password1.value === '') {
        alert('Veuillez saisir votre mot de passe.');
        password1.focus();
        return false;
    }

    if (password2.value === '') {
        alert('Veuillez confirmer votre mot de passe.');
        password2.focus();
        return false;
    }

    if (password1.value !== password2.value) {
        alert('Les mots de passe ne correspondent pas.');
        password1.value = '';
        password2.value = '';
        password1.focus();
        return false;
    }

    if (!accepterCheckbox.checked) {
        alert('Vous devez accepter les conditions générales d\'utilisation.');
        accepterCheckbox.focus();
        return false;
    }


    // si tous les champs sont valides, envoyer le formulaire
    return true;
}