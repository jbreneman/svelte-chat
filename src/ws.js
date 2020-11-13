import openSocket from 'socket.io-client';

export const init = () => {
    const socket = openSocket(CHAT_SERVER_HOST);

    return {
        connect(user) {
            socket.emit('userConnect', user);
        },
        sendMessage(message) {
            socket.emit('chatMessage', message);
        },        
        onReceiveMessage(callback) {
            socket.on('chatMessage', message => callback(message));
        },        
        onReceiveAllMessages(callback) {
            socket.on('allMessages', messages => callback(messages));
        },        
        onUpdateUserlist(callback) {
            socket.on('updateUserlist', users => callback(users));
        },        
        verifyName(user) {
            socket.emit('verifyName', user);
        },        
        onReceiveVerifyName(callback) {
            socket.on('verifyName', user => callback(user));
        },        
        setName(user) {
            socket.emit('setName', user);
        },        
        onReconnect(callback) {
            socket.on('reconnect', user => callback(user));
        },
    };
};
