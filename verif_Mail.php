<?php

session_start();

/*
require 'VerifData.php';
     if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['createButton']))
     {
        // $db_conn=mysqli_connect("localhost","root","","map") or die ("connexion impossible: ".mysqli_connect_error());
         if(isset($_POST['nom'])&&isset($_POST['prenom'])&&isset($_POST['email'])&&isset($_POST['statut'])&&isset($_POST['matricule'])&&isset($_POST['motdepasse']))
         {
             $nom=$_POST['nom'];
             $prenom=$_POST['prenom'];
             $email=$_POST['email'];
             $statut=$_POST['statut'];
             $matricule=$_POST['matricule'];
             $motdepasse=$_POST['motdepasse'];


             $data = $_POST;
             $data["code"] = VerifData::
        
         }

    }

//mysqli_close();*/


        
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
                    <h4  style="background-color: limegreen; border-color: limegreen;">Vérification email institutionnel</h4>
                </div>
                <div class="card-body" >
                <form method="post" onsubmit="return validateMail()" id="signup-form" action="signup_DB.php" >
                        <div class="form-group mb-3">
                            <label for="mail">Donner votre mail universitaire</label> <br>
                            <input type="text" class="form-control" id="email" name="email" required>
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
<script src="verifMail_js.js"></script>
</body>
</html>
