import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "https://api.nodejs.edu.vn";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [content, setContent] = useState([]);
  const [connected, setConnected] = useState([]);

  const [myId, setMyId] = useState(null);

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL);

    socket.on("connectedClients", (payload) => {
      const { id } = socket;
      setMyId(id);
      setConnected(payload);
    });

    socket.on("message", (data) => {
      setContent(data);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket) {
      socket.emit("message", message);
    }
    setMessage("");
  };

  return (
    <div id="chatForm">
      <h1>Chat form ({connected.length?.toLocaleString()})</h1>

      <div className="content">
        <div className="textMessage">
          {content?.map((item, index) => {
            const { id, text } = item;
            return (
              <p
                key={index}
                style={{ textAlign: id === myId ? "right" : "left" }}
              >
                <span style={{ color: "silver" }}>
                  {id === myId ? "You" : id}
                </span>
                {" : "}
                {text}
              </p>
            );
          })}
        </div>

        <form>
          <textarea
            type="text"
            placeholder="Text..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={sendMessage}>
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
