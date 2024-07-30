import React, { useEffect, useRef, useState } from "react";
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

  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [sendMessage]);

  return (
    <div id="chatForm">
      <h1>Chat room ({connected.length?.toLocaleString()})</h1>

      <div className="content">
        <div className="textMessage" ref={chatContainerRef}>
          {content?.map((item, index) => {
            const { id, text } = item;
            return (
              <div
                key={index}
                className="text"
                style={{
                  justifyContent: id === myId ? "flex-end" : "flex-start",
                }}
              >
                <p>
                  <span style={{ color: "silver" }}>
                    {id === myId ? (
                      "You"
                    ) : (
                      <i className="fa-solid fa-user-secret"></i>
                    )}
                  </span>{" "}
                  {text}
                </p>
              </div>
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
