const txtUid = document.querySelector('#txtUid');
const txtMensaje = document.querySelector('#txtMensaje');
const listarUsuarios = document.querySelector('#listar-usuarios');
const chats = document.querySelector('#chats-body');
const private = document.querySelector('#private');

socket.on('usuarios-activos', (payload) => {
  let usersHtml = ''
  payload.forEach(element => {
    if (socket.id === element) 
      return;
    usersHtml += `<li> ${element} </li>`
  });
  listarUsuarios.innerHTML = usersHtml
});

txtMessage.addEventListener('keyup', ({keyCode}) => {
  const uId = txtUid.value;
  const mensaje = txtMensaje.value;
  
  const payload = {
    from: socket.id,
    to: uId,
    mensaje
  }

  if (keyCode != 13) {return; }
  if (mensaje.length == 0) {return; }

  socket.emit('enviar-mensaje', payload);

})

socket.on('recibir-mensaje', (payload) => {
  console.log(payload);
  const className = payload.from === socket.id ? 'yo' : 'otro'

  if (!payload.to) {
    chats.innerHTML += `<li class="${className}"> <small>${payload.mensaje}</small></li>`
  } else {
    private.innerHTML += `<li class="${className}"> <small>${payload.mensaje}</small></li>`
  }
});









