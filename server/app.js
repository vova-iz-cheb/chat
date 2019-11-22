const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("chat message", function(object) {
    io.emit("chat message", {
      message: object.message,
      nickname: object.nickname,
      timestamp: +new Date()
    });
  });
});

http.listen(3000, () => console.log("Server is running on 3000 port"));
