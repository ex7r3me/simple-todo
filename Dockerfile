From node:10-alpine
WORKDIR /app
COPY server ./
COPY client/dist ./html/
RUN yarn
EXPOSE 4000
CMD [ "npm", "start" ]