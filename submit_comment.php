<!DOCTYPE html>
<html>
<head>
    <title>Submit Comment</title>
    <link rel="stylesheet" href="bootstrap.css">
    <style>
        h1 {
            font-size: 45px;
            text-shadow: -1px -1px #0c0, 1px 1px #060, -3px 0 4px #000;
            font-family: Arial, Helvetica, sans-serif;
            color: #090;
            padding: 16px;
            font-weight: lighter;
            -moz-box-shadow: 2px 2px 6px #888;
            -webkit-box-shadow: 2px 2px 6px #888;
            box-shadow: 2px 2px 6px #888;
            text-align: center;
        }
        p {
            font-size: 25px;
            text-align: center;
            font-weight: bold;
        }
    </style>
</head>
<body>
<h1>Confirmation d'ajout</h1>

<?php
$db_conn=mysqli_connect("localhost","root","","map") or die ("connexion impossible: ".mysqli_connect_error());

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if all required fields are present
    if (isset($_POST['user'], $_POST['comment'], $_POST['rating'])) {
        // Process the submitted form data
        $user = $_POST['user'];
        $comment = $_POST['comment'];
        $rating = $_POST['rating'];

        // Retrieve the user's name and surname based on the entered user ID (matricule)
        $query = "SELECT nom, prenom FROM utilisateur WHERE matricule = '$user'";
        $result = mysqli_query($db_conn, $query);
        if ($result && mysqli_num_rows($result) > 0) {
            $row = mysqli_fetch_assoc($result);
            $nom = $row['nom'];
            $prenom = $row['prenom'];

            // Insert the comment and rating into the "commentaire" table
            $insertQuery = "INSERT INTO commentaire (matricule, commentaire, rating) VALUES ('$user', '$comment', '$rating')";
            $insertResult = mysqli_query($db_conn, $insertQuery);

            if ($insertResult) {
                echo "<br><br><p>Merci, $nom $prenom, pour votre commentaire et votre évaluation de $rating etoiles!</p>";
            } else {
                echo "<br><br><p>Oops! Impossible d'insérer le commentaire.</p>";
            }
        } else {
            echo "<br><br><p>Oops! Utilisateur avec la matricule $user n'existe pas.</p>";
        }
    } else {
        // Display an error message if required fields are missing
        echo "<br><br><p>Oops! Certains champs obligatoires sont manquants.</p>";
    }
}

mysqli_close($db_conn);
?>

</body>
</html>
