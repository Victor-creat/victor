//FUNCTION SCOPE OR LOCAL SCOPE
//Those variables that are declared inside a function have local or function scope which means variables that are declared inside the function are not accessible outside that function.

//When declared inside a function, variables declared with var, let, and const

function username() {
    console.log('John')
}
function useractivity() {
    console.log('Skating is a outside sport.I think it is a very interesting hobby. It gives pleasure and stirs up emotions. It strengthens muscles and when done by listening to music, is energizing and exciting.')
}
function useractivity1() {
    console.log('Football Is a team sport, in which you can score only by placing the ball inside the goal of the opposite team. Teams content 11 players – field players and a goalkeeper. The goalkeepers role is to protect the goal.He is the only person that can touch the ball with his hands, but only in his penalty area')
}
function userhobby() {
    console.log('Swimming is a hobby that can last a lifetime plus its a great way to get a whole-body workout, regardless of the season.It eases stress. I love being outside in the summer.Its a great calorie burner.Its a team or individual sport.Its a low-impact sport.It requires little equipment.Its a life skill')
}
function userskill() {
    console.log('Cooking is a necessity for everyone. Everyone in their life time needs to learn how to cook because cooking makes food taste better. Without cooking, everyone would eat raw fruits, vegetables etc.')
}

username();
useractivity();
useractivity1();
userhobby();
userskill();