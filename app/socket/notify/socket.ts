"use client";
import { io, Socket } from "socket.io-client";

import { SERVER_WEBSOCKET } from "@/constants";

let socketNotify: Socket;

// Get Token JWT User
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
}

// Initialization Socket
if (!socketNotify) {
  socketNotify = io(`${SERVER_WEBSOCKET}notify`, {
    autoConnect: false,
    transportOptions: {
      polling: {
        extraHeaders: { Authorization: token },
      },
    },
  });
}

// Init Events DEBUG
socketNotify.onAny((event, ...args) => {
  console.log("onAny socketNotify: ", event, args);
});

export default socketNotify;
