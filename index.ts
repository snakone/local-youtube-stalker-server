import Server from "./src/classes/server";
import express from 'express';
import cors from 'cors';
import ROUTES from "./src/routes/routes.index";
import morgan from 'morgan';

const server = new Server();

// Middlewares
server.app.use(express.json());
server.app.use(cors());
server.app.use(express.urlencoded({ extended: false }));  // Body Parse
server.app.use(morgan('dev'));

// Routes
server.app.use(ROUTES);

server.listen(() => {
  console.log('Node/Express: \x1b[36m%s\x1b[0m', 'ONLINE');
});