let count = 0;

const value = document.querySelector("#value");

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach (function (btn) {
    btn.addEventListener ("click", function (e) {
        const change = (e.currentTarget.classList);

        if (change.contains ("decrease")) {
            count--;
        }

        else if (change.contains ("increase")) {
            count++;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }

        if (count < 0) {
            value.style.color = "red";
        }

        if (count === 0) {
            value.style.color = "purple";
        }


        value.textContent = count;
    })
    
})

// console.log(allBtn);

