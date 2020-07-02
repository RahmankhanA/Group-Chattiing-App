//Client side
const socket = io('http://localhost:8000');
var audio = new Audio(''); // audio address
const name = prompt('Enter Your Name');
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector('.container');
const append = (message, position) => {
    const messageElement = document.createComment('div');
    messageElement.innerText = massage;
    messageElement.classList.add('message ');
    messageElement.classList.add('position');
    messageContainer.append(messageElement);
    if (position == 'left') {
        audio.play();
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append('You: ${message}', 'right');
    socket.emit('send', massage);
    messageInput.value = '';
})

socket.emit('new-user-joined', name);
socket.on('user-joined', data => {
    append('${name} joined the chat', 'right');

})
socket.on('receive', data => {
    append('${data.name}:${data.message}', 'left')
})
socket.on('left', name => {
    append('${name} left the chat', 'right')
})