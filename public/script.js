const socket = io();

const usernameInput = document.getElementById("username");
const joinButton = document.getElementById("join-btn");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");
const chatInputContainer = document.getElementById("chat-input-container");

joinButton.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    socket.emit("joinRoom", { username, room: "404" });
    chatInputContainer.style.display = "flex";
    usernameInput.style.display = "none";
    joinButton.style.display = "none";
  }
});

sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("chatMessage", message);
    messageInput.value = "";
  }
});

socket.on("chatMessage", (data) => {
  const messageElement = document.createElement("div");
  messageElement.className = "chat-message";
  messageElement.style.color = data.color || "#000"; // Default color if not provided

  // Format the message with timestamp and username
  messageElement.innerHTML = `
    <span class="timestamp">${data.timestamp}</span>
    <span class="username">${data.username}:</span> ${data.message}
  `;

  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
});
