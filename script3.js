//LEXICAL SCOPE
//The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope.

function outerFunction() {

        const outerVariable = "Hello";
    
        function innerFunction() {
    
            const innerVariable = "Geeks";

            console.log(`${outerVariable} ${innerVariable}`);
        }
        innerFunction();
    }
    
    outerFunction();
    