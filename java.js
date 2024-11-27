//BLOCK SCOPE DO NOT USE VAR
//Variables that are declared inside the { } (curly braces) can only access inside that scope not from the outside of it.

//Variables declared with var do not have block scope only let and const have block scope.

{
    let username = "James";
    let hobby1= "Skating is a outside sport.I think it is a very interesting hobby. It gives pleasure and stirs up emotions. It strengthens muscles and when done by listening to music, is energizing and exciting.";
    let hobby2= "Football Is a team sport, in which you can score only by placing the ball inside the goal of the opposite team. Teams content 11 players – field players and a goalkeeper. The goalkeepers role is to protect the goal.He is the only person that can touch the ball with his hands, but only in his penalty area";
    let hobby3 = "Photography is my favorite hobby. The aim of indulging such an interest is sheer pleasure or relaxation.It refreshes the mind and provides a welcome change from such dull and dreary routine of daily life. I visited a few good libraries and read articles and magazines on the subject of photography";
    let hobby4 = "Swimming is a hobby that can last a lifetime plus its a great way to get a whole-body workout, regardless of the season.It eases stress. I love being outside in the summer.Its a great calorie burner.Its a team or individual sport.Its a low-impact sport.It requires little equipment.Its a life skill";
    let hobby5 = "Cooking is a necessity for everyone. Everyone in their life time needs to learn how to cook because cooking makes food taste better. Without cooking, everyone would eat raw fruits, vegetables etc."

    function check_username () {
        console.log(username);
        console.log(hobby1);
        console.log(hobby2);
        console.log(hobby3);
        console.log(hobby4);
        console.log(hobby5);
    }
   check_username();
}