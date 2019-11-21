const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("chat message", function(mes) {
    console.log("User Message: " + mes);
  });
});

http.listen(3000, () => console.log("Server is running on 3000 port"));
