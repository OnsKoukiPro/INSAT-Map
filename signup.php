<?php

session_start();

if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['createButton']))
{
   // $db_conn=mysqli_connect("localhost","root","","map") or die ("connexion impossible: ".mysqli_connect_error());
    if(isset($_POST['nom'])&&isset($_POST['prenom'])&&isset($_SESSION['email'])&&isset($_POST['statut'])&&isset($_POST['matricule'])&&isset($_POST['motdepasse']))
    {
        $nom=$_POST['nom'];
        $prenom=$_POST['prenom'];
        $email=$_SESSION['email'];
        $statut=$_POST['statut'];
        $matricule=$_POST['matricule'];
        $motdepasse=$_POST['motdepasse'];


        $sql1="INSERT INTO utilisateur VALUES ('$nom','$prenom','$email','$statut','$matricule','$motdepasse')";
        $query1; //mysqli_query($db_conn,$sql1)or die (mysqli_error($db_conn));
        if (true)
           {echo 'creation de compte avec succees' ;
             echo "<a href='http://localhost:8000/?views=Vue' class='btn btn-primary'>Voir la Carte</a>";
            }
        else {echo 'erreur de creation' ;}

    }

}



//mysqli_close();

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Créer votre compte - MapYourWay</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="signup_style.css">
</head>
<body>
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="container">
            <div>
                <img id="logo" src="logo_insat.png" class="img-fluid" alt="Logo">
            </div> <hr>
            <div class="left_card">
                <h1 id="project_name" class="mt-3 mb-0 text-primary"> INSAT</h1>
                <p id="project_slogan" class="lead text-secondary"> Carte Virtuelle Interactive</p>
                <p id="project_slogan2" class="lead text-secondary"> Explorez votre institut comme jamais auparavant</p>
            </div>
            <div class="right_card">
                <div class="card-header  text-white">
                    <h4  style="background-color: limegreen; border-color: limegreen;">Créer un compte</h4>
                </div>
                <div class="card-body" >



                    <form method="post" onsubmit="return validateForm()" id="signup-form" action="signup.php" >
                        <div class="form-group mb-3">
                            <label for="nom">Nom</label> <br>
                            <input type="text" class="form-control" id="nom" name="nom"  required autocomplete="nom">
                        </div>
                        <div class="form-group mb-3">
                            <label for="prenom">Prénom</label> <br>
                            <input type="text" class="form-control" id="prenom" name="prenom" required autocomplete="prenom">
                        </div>
                        <div class="form-group statut">
                            <label>Statut</label> <br>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="statut" id="etudiant" value="etudiant" checked style="position: absolute; left: 60px;">
                                <label class="form-check-label" for="etudiant" style="position: absolute; left: 70px;">
                                    Étudiant
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="statut" id="prof" value="prof" style="position: absolute; left: 60px;">
                                <label class="form-check-label" for="prof" style="position: absolute; left: 70px;">
                                    Professeur
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="statut" id="administratif" value="administratif" style="position: absolute; left: 60px;">
                                <label class="form-check-label" for="administratif" style="position: absolute; left: 70px;">
                                    Personnel administratif
                                </label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="matricule">Matricule</label> <br>
                            <input type="text" class="form-control" id="matricule" name="matricule" required autocomplete="matricule">
                        </div>
                        <div class="form-group mb-3">
                            <label for="motdepasse">Mot de passe</label> <br>
                            <input type="password" class="form-control" id="motdepasse" name="motdepasse" required>
                        </div>
                        <div class="form-group mb-3">
                            <label for="confirmermotdepasse">Confirmer le mot de passe</label> <br>
                            <input type="password" class="form-control" id="confirmermotdepasse" name="confirmermotdepasse" required>
                        </div>
                        <div class="form-group form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="accepter1" name="accepter1" required>
                            <label class="form-check-label" for="accepter1">J'accepte les <a href="terms_of_use.pdf" target="_blank">conditions générales d'utilisation</a>.</label>
                        </div>
                        <div class="form-group form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="accepter2" name="accepter2" >
                            <label class="form-check-label" for="accepter2">Ce site utilise des <span>cookies</span> pour améliorer votre expérience. Veuillez cocher la case pour accepter les cookies.</label>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit"  name="createButton" class="btn btn-primary">Créer mon compte</button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    </div>
</div>
<script src="signup_js.js"></script>
</body>
</html>