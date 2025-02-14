const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const btn2 = document.querySelector("#btn2");
const phone = document.querySelector("#phone").value.trim();
const verify = document.querySelector("#verify");
const otp = document.querySelector("#otp");
const timeCount = document.querySelector("#timer2");
let remainingTime = 30;
let timerInterval;
let n,temp;

if(!phone)
{
    verify.style.visibility = "hidden";
    timeCount.style.visibility = "hidden";
}

btn2.addEventListener('click', (event) =>
{
    const phone = document.querySelector("#phone").value.trim();
    const phonePattern = /^[0-9]{10}$/; 
    if (phone === "" || !phonePattern.test(phone)) 
    {
        alert("Please enter a valid phone number (10 digits).");
        event.preventDefault();  
        return;
    }

    otp.innerHTML = ""; 
    verify.value = "";

    n = (Math.floor(Math.random() * 1000000));
    event.preventDefault();
    
    otp.innerHTML = `Generated OTP = ${n}`;
    otp.style.visibility = "visible";
    verify.style.visibility = "visible";
    timeCount.style.visibility = "visible"; 
    btn2.disabled = true;

    remainingTime = 30; 

    clearInterval(timerInterval); 
    timerInterval = setInterval(updateTimer, 1000);

    temp = n;
    event.preventDefault();
});

function updateTimer() 
{
    if (remainingTime <= 0) 
    {
        timeCount.innerHTML = "Your OTP has expired. Please try again.";
        clearInterval(timerInterval);
        btn2.disabled = false; 
        otp.innerHTML = ""; 
        otp.style.visibility = "hidden";
        return;
    }

    timeCount.innerHTML = `Time remaining: 00:${remainingTime < 10 ? "0" : ""}${remainingTime}`;
    remainingTime--;
}

form.addEventListener('submit', (event) =>
    {
        const verifyval = verify.value.trim();
        const phone = document.querySelector("#phone").value.trim();
        const phonePattern = /^[0-9]{10}$/; 

        if (remainingTime <= 0) 
        {
            alert("Time is over. Please generate a new OTP.");
            event.preventDefault(); 
            return;
        }

        if (phone === "" || !phonePattern.test(phone)) 
        {
            alert("Please enter a valid phone number (10 digits).");
            event.preventDefault();  
            return;
        }
        if(!verifyval)
        {
            alert("Please enter otp");
            console.log(temp);
            event.preventDefault();
            return;
        }
        if(parseInt(verifyval) !== temp)
        {
            alert("Incorrect OTP");
            event.preventDefault();
            return;
        }
    });