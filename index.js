const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const moment = require("moment-timezone");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static("public")); // Serve static files from the 'public' directory

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    socket.username = username;
    socket.room = room;

    const joinMessage = {
      username: "System",
      message: `${username} has joined the chat`,
      timestamp: moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss"),
      color: "#000000", // Default color for system messages
    };
    io.to(room).emit("chatMessage", joinMessage);
  });

  socket.on("chatMessage", (message) => {
    const timestamp = moment().tz("Asia/Dhaka").format("YYYY-MM-DD HH:mm:ss");
    const data = {
      username: socket.username,
      message: message,
      timestamp: timestamp,
      color: getUserColor(socket.username),
    };
    io.to(socket.room).emit("chatMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

function getUserColor(username) {
  // Color assignment logic
  const colors = ["#ff6347", "#4682b4", "#32cd32", "#ff4500", "#8a2be2"];
  const index = Math.abs(username.charCodeAt(0) % colors.length);
  return colors[index];
}

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
