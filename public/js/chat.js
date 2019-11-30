var socket = io();

document.querySelector('#refresh').addEventListener('click', () =>{
  console.log('clicked');
  socket.emit('increment');
})

socket.on('reload', ()=>{
  window.location.reload();
})
