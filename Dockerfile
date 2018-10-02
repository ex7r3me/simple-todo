From node:10-alpine
WORKDIR /app
COPY server ./
COPY client/build ./html/
RUN yarn
EXPOSE 4000
CMD [ "node", "index.js" ]