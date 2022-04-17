<?php
class User
{
    public $username;
    // public $email;
    // private $username;
    protected $email; // 相較於private一樣不可被外界調用，但可被繼承
    public $role = 'member';

    public static $personality = ['calm', 'brave', 'ambitious']; // 靜態屬性與方法不需要創建instance即可調用
    // User::$personality = instance->$personality

    public function __construct($username, $email)
    {
        $this->username = $username;
        $this->email = $email;
    }

    public function __destruct()
    {
        echo "the user $this->username was remove" . '<br>';
    }

    public function __clone()
    {
        $this->username = $this->username . '(clone)<br>';
    }

    public function addFriend()
    {

        return "$this->username added a new friend";
    }

    public function message()
    {
        return "$this->email sent a new message";
    }
// GETTER
    public function getEmail()
    {
        return $this->email;
    }

    // setter
    public function setEmail($email)
    {
        // 判斷 @ 在字符串中的位置
        if (strpos($email, '@') > -1) {
            $this->email = $email;
        }
    }

    public static function personalityGrow($p)
    {
        if ($p < 5) {
            return self::$personality[0]; // 靜態函數調用通常不會有instance，所以調用自身靜態屬性不能用this，this為instance的用法，用self
        } else if ($p < 25) {
            return self::$personality[1];
        } else if ($p < 45) {
            return self::$personality[2];
        }
    }
}

class AdminUser extends User
{
    public $level;
    public $role = 'admin';
    public $email;
    // 雖然構造函數會自動繼承，但多新的設定時會複寫
    public function __construct($username, $email, $level)
    {
        $this->level = $level;
        // 新的構造函數便會被改寫，需要手動調用(繼承)父類的構造函數
        parent::__construct($username, $email);
        // $this->email = $email; // private屬性不能被繼承 但可以被傳遞再重新聲明即可
    }

    public function message()
    {
        return "$this->email, an admin, sent a new message";
    }

}
class NormalUser extends User
{
    // public function __construct($username, $email)
    // {
    //     // parent::__construct($username, $email);
    // }
}
print_r(User::$personality);
echo 'this person is ' . User::personalityGrow(30) . '<br>';
$userOne = new User('frank', 'frank_liao@kiitzu.com');
// $userTwo = new User('Tom', 'Tom@kiitzu.com');

// $userThree = new AdminUser('yoshi', 'yoshi@net.ninja', 5);
// $userFour = new NormalUser('Amy', 'Amy@test.com');

// $userOne->setEmail('abc@abc.com');

// echo $userOne->message() . '<br>';
// echo $userThree->message() . '<br>';

$userFive = clone $userOne;
echo $userFive->username;

// unset($userOne); // 刪除一個實例，但實際上最後都會自動刪除

// echo $userOne->getEmail() . '<br>';
// echo $userTwo->getEmail() . '<br>';
// echo $userThree->getEmail() . '<br>';
// echo $userFour->getEmail() . '<br>';
// echo $userOne->username . '<br>';
// echo $userOne->email . '<br>';
// echo $userOne->addFriend() . '<br>';
// print_r(get_class_vars('User'));
// print_r(get_class_methods('User'));
// echo 'the class is ' . get_class($userOne);

// $userTwo->username = 'Tom';
// echo '<br>' . $userTwo->username . '<br>';
// echo $userTwo->email . '<br>';
// echo $userTwo->addFriend() . '<br>';