
<?php
    $cs = "mysql:host=localhost;dbname=recipes1";
    $user ="root";
    $pass=null;

    try{
        $options = [PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION];
        $db = new PDO ($cs,$user,$pass,$options);

    }catch (PDOExeption $e){
        $error = $e->getMessage();
        echo $error;
    }

    $query = "SELECT * FROM recipe";
    $result = $db->query($query); 
    $results = $result->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($results);

    ?>