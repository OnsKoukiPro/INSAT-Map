<?php
if ($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['connectButton']))
{
    $db_conn=mysqli_connect("localhost","root","","map") or die ("connexion impossible: ".mysqli_connect_error());
    if(isset($_POST['identifiant'])&&isset($_POST['motdepasse']))
    {

        $identifiant=$_POST['identifiant'];
        $motdepasse=$_POST['motdepasse'];


        $sql1="select * from utilisateur where (email= $identifiant) or (matricule=$identifiant)";
        $query1=mysqli_query($db_conn,$sql1)or die (mysqli_error($db_conn));
        if ((mysqli_num_rows($query1)=0)
            {echo "ce compte n'existe pas" ;}
        else{
            $sql2="select * from utilisateur where (email= $identifiant or matricule=$identifiant) and motdepasse=$motdepasse";
            $query2=mysqli_query($db_conn,$sql2)or die (mysqli_error($db_conn));
                if ((mysqli_num_rows($query2)=0)
                {echo 'mot de passe incorrecte' ;}

        }





    }

}



mysqli_close();
?>
