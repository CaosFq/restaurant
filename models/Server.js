const express = require('express');
const cors = require('cors');

const { db } = require('../database/db');
const mealRouter = require('../routes/meal.router');
const orderRouter = require('../routes/order.router');
const userRouter = require('../routes/user.router');
const restaurantRouter = require('../routes/restaurant.router');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    //Definimos los PATHS de nuestra aplicación
    this.paths = {
    restaurants: '/api/v1/users',
    meals: '/api/v1/restaurants',
    orders: '/api/v1/meals',
    users: '/api/v1/orders'
    };

    //Llamo al método de conexión a la base de datos
    this.database();

    //Invocamos a el metodo Middlewares
    this.middlewares();

    //Invocamos el método Routes
    this.routes();
  }

  middlewares() {
    if (process.env.NODE_ENV === 'development') {
      this.app.use(morgan('dev'));
    }
    //Utilizamos las cors para permitir el acceso a la API
    this.app.use(cors());
  }
  routes() {
    //Importante: la ruta siempre tiene que arriba de los errores
    this.app.use(this.paths.restaurant, restaurantRouter);
    this.app.use(this.paths.user, userRouter);
    this.app.use(this.paths.meal, mealRouter); 
    this.app.use(this.paths.order, orderRouter);


  database() {
    db.authenticate()
      .then(() => console.log('Database authenticated'))
      .catch(err => console.log(err));

    //relations
    initModel();

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server Running On Port ', this.port);
    });
  }
}
module.exports = Server;


