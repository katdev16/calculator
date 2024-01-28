// start of the screen
const screen = document.getElementById("screen");
// screen.textContent = 0 



const buttons = Array.from(document.getElementsByClassName("btn"));

// Loop through each button and attach the event listener
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = button.textContent;
        appendToScreen(value);
    });
});


const list =[]
const result =0
function appendToScreen(value) {
    
    
    // opartors to not show on screen

    if(value!="=" && value!="Ac" && value!="<="){
        screen.textContent += value;
    }
    if(value==='Ac'){
        screen.textContent = []
        list.length=0

    }
    console.log(value)
    if(!isNaN(value)){
        value = Number(value);
    }
    var numbers = list.join("");
    if (value !== "Ac" && value != "=" && value!="<=" ) {
        console.log(list)
        list.push(value);
        let numbers = list.join("");
        console.log(list)
        }

    else if (value === "=") {
        evaluateExpression();
    }
    else if(value==="<="){
        if (list.length > 0) {
            list.pop(); // Remove the last element from the list
            const updatedNumbers = list.join("");
            screen.textContent = updatedNumbers;
        }




    }
    }
    
    function evaluateExpression() {
        const expression = list.join("");
        try {
            var result = new Function("return " + expression)();
            screen.textContent = result;
        } catch (error) {
            console.error("Invalid expression:", expression);
        }
        list.length = 0; // Clear the list after evaluation
        
        list.push(result)
        console.log(list)
    }

debugger;
        


    
   