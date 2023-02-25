import { useWebSocket } from "ahooks";
import { useEffect } from "react";
import React from "react";

function App() {
  const {
    readyState,
    sendMessage,
    latestMessage,
    disconnect,
    connect
  } = useWebSocket(
    "wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self",
    {
      manual: true,
      reconnectLimit: 9999,
      onOpen: () => {
        console.log("open");
      },
      onClose: () => {
        console.log("close");
      }
    }
  );
  useEffect(() => {
    // connect();
    return () => {
      disconnect();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>{readyState}</div>
        <button onClick={() => connect()}>aaa</button>
      </header>
    </div>
  );
}

export default App;
