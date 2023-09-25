"use client";
import { io, Socket } from "socket.io-client";

import { SERVER_WEBSOCKET } from "@/constants";

let socket: Socket;

// Get Token JWT User
let token;
if (typeof window !== "undefined") {
  token = localStorage.getItem("token") ? localStorage.getItem("token") : null;
}

// Initialization Socket
if (!socket) {
  socket = io(`${SERVER_WEBSOCKET}chat`, {
    autoConnect: false,
    transportOptions: {
      polling: {
        extraHeaders: { Authorization: token },
      },
    },
  });
}

// Init Events DEBUG
socket.onAny((event, ...args) => {
  console.log("onAny: ", event, args);
});

export default socket;
