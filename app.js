const myNumbers = document.querySelector("#myNumbers");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");





startBtn.addEventListener("click", startCount);
numbers =0;
minutes = 0;
function startCount () {
  
   const myTimer = setInterval(countSeconds, 100);

    function countSeconds () {
        numbers +=1;
        if (numbers === 61) {
            numbers = 0;
            countSeconds();
        }
       console.log(numbers);
    }

    const myMinutes = setInterval (countMinutes, 60000);
        function countMinutes () {
            minutes +=1;
            if (minutes === 61) {
                minutes = 0;
                countMinutes();
            }
         console.log(minutes);
     }

     myNumbers.innerHTML= `${minutes}:${numbers}`

}














