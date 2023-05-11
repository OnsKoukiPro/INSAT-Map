<?php

class VerifData {

    const userData = self::random_string(32);

    public static function setUserData( $data ){
        if (!self::$userData)
            self::$userData = $data;
    }

    public static function getUserData() {
        $temp = self::$userData;
        foreach( $temp as $el) 
            echo $el;
        //self::setUserData(null);
        return $temp;
    }

    

}

?>