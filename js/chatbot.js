const trigger = document.getElementById("chatbot-trigger");
const modal = document.getElementById("chatbot-modal");
const closeBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("chatbot-messages");

// Trigger open
if (trigger && modal && closeBtn) {
  trigger.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

// Toggle (optional backup)
const toggleBtn = document.getElementById("chatbot-toggle");
if (toggleBtn) {
  toggleBtn.onclick = () => {
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
  };
}

// Send message
sendBtn.onclick = async () => {
  const msg = userInput.value.trim();
  if (!msg) return;

  messages.innerHTML += `<div><b>You:</b> ${msg}</div>`;
  userInput.value = "";

  try {
    const response = await fetch(
      "https://367adb18-b610-452f-a92a-813ea9f1a27a-00-2pz12j0lbfn0w.pike.replit.dev/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      }
    );

    const data = await response.json();
    messages.innerHTML += `<div><b>Bot:</b> ${data.reply}</div>`;
    messages.scrollTop = messages.scrollHeight;
  } catch (err) {
    messages.innerHTML += `<div><b>Bot:</b> Error! Backend not responding.</div>`;
  }
};