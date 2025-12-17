let buttons = document.querySelectorAll(".Button");
let ResultBox = document.getElementById("Result");

let string = "";
let operators = ["+", "-", "*", "/", "%"];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {

        // All Clear click : 
        if (btn.innerText === "AC") {
            string = "";
            ResultBox.value = "";
        }

        // Click Delete : 
        else if (document.getElementById("Del")) {
            string = string.slice(0, -1);
            ResultBox.value = string;
        }

        // Click Equals to : 
        else if (btn.innerText === "=") {
            if (string === "") return;
            try {
                string = eval(string);
                ResultBox.value = string;
            } catch {
                ResultBox.value = "Error";
                string = "";
            }
        }

        // Numbers and Operators click : 
        else {
            let lastChar = string.slice(-1);

            if (operators.includes(lastChar) && operators.includes(btn.innerText)) return; 
            // Very Important this will check last String character is Any operator or not 

            string += btn.innerText;
            ResultBox.value = string;
        }
    });
});
