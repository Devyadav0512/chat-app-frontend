var socket = new WebSocket('ws://localhost:9000/ws')

let connect = (cb) => {
    console.log("Connecting...");

    socket.onopen = () => {
        console.log("Successfully Connected!");
    }

    socket.onmessage = (msg) => {
        console.log("Message :) ",msg);
    }

    socket.onclose = (event) => {
        console.log("Disconnected :( ",event);
    }

    socket.onerror = (error) => {
        console.log("Error 0X ", error);
    }
};

let sendMsg = (msg) => {
    console.log("Sending Message...", msg);
    socket.send(msg);
}

export { connect, sendMsg };