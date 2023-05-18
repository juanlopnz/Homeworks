const express =  require("express");
const { dbConnection } = require("../database/config");
require('dotenv').config()
const cors = require('cors')
const { socketController } = require("../sockets/controller");

class Server{
  constructor(){
    this.headers = {
      cors: {
        origin: 'http://127.0.0.1:5173',
        methods: ['GET', 'POST']
      }
    }

    this.app = express();
    this.port = process.env.PORT;
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server, this.headers);

    this.paths = {
      auth: '/api/auth',
      task: '/api/task'
    }

    this.connectToDB();
    this.addMiddlewares();
    this.setRoutes();

    this.sockets();
  }

  async connectToDB(){
    await dbConnection();
  }

  addMiddlewares(){
    this.app.use(cors(this.headers));

    this.app.use(express.json());
  
    this.app.use(express.static('public'));
  }

  setRoutes(){
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.task, require('../routes/task'));
  }

  sockets(){
    this.io.on(
      'connection', 
      socket => socketController(socket, this.io)
    )
  }

  listen(){
    this.server.listen(this.port, () => {
      console.log('Servidor corriendo en puerto', process.env.PORT)
    })
  }
}

module.exports = Server;