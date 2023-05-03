<?php
     if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['createButton']))
     {
         $db_conn=mysqli_connect("localhost","root","","map") or die ("connexion impossible: ".mysqli_connect_error());
         if(isset($_POST['nom'])&&isset($_POST['prenom'])&&isset($_POST['email'])&&isset($_POST['statut'])&&isset($_POST['matricule'])&&isset($_POST['motdepasse']))
         {
             $nom=$_POST['nom'];
             $prenom=$_POST['prenom'];
             $email=$_POST['email'];
             $statut=$_POST['statut'];
             $matricule=$_POST['matricule'];
             $motdepasse=$_POST['motdepasse'];


             $sql1="INSERT INTO utilisateur VALUES ('$nom','$prenom','$email','$statut','$matricule','$motdepasse')";
             $query1=mysqli_query($db_conn,$sql1)or die (mysqli_error($db_conn));
             if ($query1)
                {echo 'creation de compte avec succees' ;}
             else {echo 'erreur de creation' ;}

         }

    }



mysqli_close();
?>
