let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("reset");
let turnO = true;

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {

        
        if (box.innerText !== "") {
            return;
        }

        
        if (turnO) {
            box.innerText = "s";
            turnO = false;
        } else {
            box.innerText = "p";
            turnO = true;
        }

        
        box.disabled = true;

        
        checkWinner();
    });
});


function checkWinner() {

    for (let pattern of winConditions) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {

            if (pos1 === pos2 && pos2 === pos3) {

                alert(`Winner is ${pos1}`);

                // Disable all boxes after win
                boxes.forEach((box) => {
                    box.disabled = true;
                });

                return;
            }
        }
    }

    
    let filledBoxes = 0;

    boxes.forEach((box) => {
        if (box.innerText !== "") {
            filledBoxes++;
        }
    });

    if (filledBoxes === 9) {
        alert("Game Draw!");
    }
}


resetButton.addEventListener("click", () => {

    turnO = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
});
        
            
            