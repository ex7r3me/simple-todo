![Screenshot](docs/screenshot.png?raw=true "screenshot")

Simple Todo List
=============

This todo list using following tools:
- Node & Express  
- GraphQL  
- Apollo  (Client-Server)  
- TypeScript  
- Mocha  or  Jest  
- Webpack  
- React/Redux  
- Docker  
- GitHub 


## Demo

[Demo on now.sh](https://siavash-todo.now.sh)

## Build and Run
Server:

```sh
git clone https://github.com/ex7r3me/simple-todo
cd server
npm install
npm run build-ts
npm start

```
Client:
```sh
cd client
npm install
npm run start:dev
```
Run server tests (make sure to install dev dependencies):
```sh
npm test
```
to use docker build, first build client side in production mode:
```sh
npm build --mode=production
```
then copy content `dist` folder to `server/html`, then go to root and run following command to build docker image

```sh
docker build -t ex7r3me/simple-todo
```
then run:
```sh
docker run -p 4000:4000  ex7r3me/simple-todo
```

