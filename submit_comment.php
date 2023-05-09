<!DOCTYPE html>
<html>
<head>
    <title>Submit Comment</title>
    <link rel="stylesheet" href="bootstrap.css">
    <style>
        h3{
            color:	#EFD807 !important;
            font-size: 30px;
            text-align: left;
            display: block;
            margin: 0 auto;
            font-weight: bold ;
        }
        h2{
            font-size:35px;
            color:#1f4068 !important;
            font-weight: bold ;

        }
        body {
            background-image: url('back1.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            padding: 0;
        }
        h1 {
            font-size: 58px;
            text-shadow: -1px -1px #990000 !important;, 1px 1px #060, -3px 0 4px #000;
            font-family: Arial, Helvetica, sans-serif;
            color:#990000 !important;
            padding: 20px;
            font-weight: lighter;
            -moz-box-shadow: 2px 2px 6px #888;
            -webkit-box-shadow: 2px 2px 6px #888;
            box-shadow: 2px 2px 6px #888;
            text-align: center;
            display: block;
            margin: 16px auto;
        }
        p {
            color:	#5A5A5A !important;
            font-size: 25px;
            text-align: left;
            display: block;
            margin: 0 auto;
            font-weight: bold ;
        }

        .comments-container {
            margin-top: 40px;
            max-width: 600px;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 2px 2px 6px #888;
        }

        .comment {
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ccc;
        }

        .comment p {
            margin-bottom: 5px;
        }
    </style>
    <?php echo "<a href='http://localhost:8000/?views=Vue' class='btn btn-primary'>Voir la Carte</a>";
    ?>
</head>
<body style="background-image: url('back1.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center center;">

<h1>Confirmation d'ajout</h1>

<?php
$db_conn = mysqli_connect("localhost", "root", "", "map") or die("connexion impossible: " . mysqli_connect_error());

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
            $insertQuery = "INSERT INTO commentaire VALUES ('$user', '$comment', '$rating')";

            $insertResult = mysqli_query($db_conn, $insertQuery);

            if ($insertResult) {
                echo "<h3>Merci $nom  $prenom pour votre commentaire et votre évaluation de $rating étoiles!</h3>";

                // Retrieve the past comments of the user
                $pastCommentsQuery = "SELECT comment, rating FROM commentaire WHERE user = '$user'";
                $pastCommentsResult = mysqli_query($db_conn, $pastCommentsQuery);

                if ($pastCommentsResult && mysqli_num_rows($pastCommentsResult) > 0) {
                    echo "<div class='comments-container'>";
                    echo "<h2>Vos commentaires précédents :</h2>";

                    while ($row = mysqli_fetch_assoc($pastCommentsResult)) {
                        $commentaire = $row['comment'];
                        $rating = $row['rating'];

                        echo "<div class='comment'>";
                        echo "<p>Commentaire : $commentaire</p>";
                        echo "<p>Évaluation : $rating étoiles</p>";
                        echo "</div>";
                    }

                    echo "</div>";
                } else {
                    echo "<h3>Vous n'avez pas encore de commentaires précédents.</h3>";
                }
            } else {
                echo "<br><br><h3>Oops! Impossible d'insérer le commentaire.</h3>";
            }
        } else {
            echo "<br><br><h3>Oops! Utilisateur avec la matricule $user n'existe pas.</h3>";
        }
    }}
mysqli_close($db_conn);
?>

</body>
</html>
