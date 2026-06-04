/* Buttons */

const buttons =
document.querySelectorAll(".options button");

const chatMessages =
document.getElementById("chatMessages");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        let response = "";

        if(button.innerText === "Track order"){

            response =
            "Your order is currently out for delivery and will arrive soon.";

        }

        else if(button.innerText === "Refund status"){

            response =
            "Your refund request has been initiated successfully.";

        }

        else if(button.innerText === "Reschedule"){

            response =
            "Your delivery has been rescheduled for tonight.";

        }

        else if(button.innerText === "Report delay"){

            response =
            "Traffic congestion detected near your location.";

        }

        /* User Bubble */

const userBubble =
document.createElement("div");

userBubble.classList.add("user-message");

userBubble.innerText =
button.innerText;

chatMessages.appendChild(userBubble);

/* AI Bubble */

const aiBubble =
document.createElement("div");

aiBubble.classList.add("ai-message");

aiBubble.innerText = response;

chatMessages.appendChild(aiBubble);

    });

});

/* User Input */

const sendBtn =
document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

sendBtn.addEventListener("click", () => {

    let text =
    userInput.value.toLowerCase();

    let aiReply = "";

    if(text.includes("track")){

        aiReply =
        "Your order is currently out for delivery.";

    }

    else if(text.includes("refund")){

        aiReply =
        "Refund request is being processed.";

    }

    else if(text.includes("delay")){

        aiReply =
        "Delivery delay detected because of traffic.";

    }

    else{

        aiReply =
        "Sorry, I could not understand your request.";

    }

    /* User Message */

const userMessage =
document.createElement("div");

userMessage.classList.add("user-message");

userMessage.innerText =
userInput.value;

chatMessages.appendChild(userMessage);

/* AI Reply */

const aiMessage =
document.createElement("div");

aiMessage.classList.add("ai-message");

aiMessage.innerText =
aiReply;

chatMessages.appendChild(aiMessage);

    userInput.value = "";

});

/* Dynamic Alerts */

const alerts = [

    "⚠️ Heavy traffic detected near your location.",

    "🚚 Delivery partner is 2 km away.",

    "✅ Refund request initiated successfully.",

    "📦 Order packed and dispatched.",

    "🎉 Order arriving earlier than expected."

];

const randomAlert =
alerts[Math.floor(Math.random() * alerts.length)];

document.getElementById("alertMessage").innerText =
randomAlert;

/* ETA Countdown */

let eta = 18;

const etaElement =
document.getElementById("etaTime");

setInterval(() => {

    if(eta > 0){

        eta--;

        etaElement.innerText = eta;

    }

}, 3000);