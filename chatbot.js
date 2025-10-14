// === TALENTBOT CHATBOT SCRIPT ===

// Create chat icon
const chatIcon = document.createElement("div");
chatIcon.id = "chat-icon";
chatIcon.textContent = "💬";
chatIcon.onclick = toggleChat;
document.body.appendChild(chatIcon);

// Create chatbot container
const chatBox = document.createElement("div");
chatBox.className = "chatbot";
chatBox.id = "chatbot-box";
chatBox.innerHTML = `
  <div class="chatbot-header">TalentBot 🤖</div>
  <div class="chatbot-body" id="chat-body">
    <p><b>Bot:</b> Hi! I’m TalentBot. How can I help you today?</p>
  </div>
  <div class="chatbot-input">
    <input type="text" id="chat-input" placeholder="Type a message..." />
    <button id="chat-send">Send</button>
  </div>
`;
document.body.appendChild(chatBox);

// Add styles
const style = document.createElement("style");
style.innerHTML = `
  #chat-icon {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #004aad;
    color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    z-index: 9999;
  }
  .chatbot {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 320px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    display: none;
    flex-direction: column;
    overflow: hidden;
    z-index: 10000;
  }
  .chatbot-header {
    background: #004aad;
    color: white;
    padding: 10px;
    text-align: center;
  }
  .chatbot-body {
    flex: 1;
    padding: 10px;
    height: 250px;
    overflow-y: auto;
    font-size: 14px;
  }
  .chatbot-input {
    display: flex;
    border-top: 1px solid #ccc;
  }
  .chatbot-input input {
    flex: 1;
    border: none;
    padding: 10px;
    outline: none;
  }
  .chatbot-input button {
    background: #004aad;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// === Chatbot Logic ===
function toggleChat() {
  const box = document.getElementById("chatbot-box");
  box.style.display = box.style.display === "flex" ? "none" : "flex";
}

document.addEventListener("click", function (e) {
  if (e.target.id === "chat-send") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;
  const chatBody = document.getElementById("chat-body");
  chatBody.innerHTML += `<p><b>You:</b> ${msg}</p>`;
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(msg);
    chatBody.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 600);
}

function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi"))
    return "Hey there 👋! I’m TalentBot. I can help you with login, uploading videos, finding players, or achievements.";
  if (msg.includes("upload"))
    return "To upload your video, go to your dashboard → 'Upload Talent Video' section.";
  if (msg.includes("reward") || msg.includes("achievement"))
    return "Your achievements and rewards appear under 'Achievements' in your dashboard.";
  if (msg.includes("academy"))
    return "You can find or invite academies in the dashboard 'Explore Players' section.";
  if (msg.includes("profile"))
    return "You can edit or view your profile using the 'My Profile' button.";
  if (msg.includes("login") || msg.includes("sign"))
    return "You can sign up or sign in from the 'Sign In / Sign Up' page.";
  if (msg.includes("help"))
    return "You can ask me about uploading videos, achievements, login, or searching players.";
  if (msg.includes("bye"))
    return "Goodbye! Keep practicing and stay strong 💪🏽.";

  return "Sorry, I didn't understand that. Try asking about 'upload', 'profile', or 'achievement'.";
}
