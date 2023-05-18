const socket = io();

socket.on('connect', () => {
  console.log('Connected', socket.id);
})

const payload = {
  mensaje: 'Hola Mundo',
  uid: 123,
  fecha: 'Oct 27, 2022'
}

socket.emit('mensaje-de-cliente', 
  payload, 
  ( data ) => {
  console.log('Respuesta del server', data);
});

socket.on('mensaje-de-server', (payload) => {
  console.log(payload);
})

socket.on('disconnect', () => {
  console.log('Disconnected');
})