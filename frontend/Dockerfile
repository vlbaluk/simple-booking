FROM node:14

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .
RUN mkdir /data
COPY ./src /data
EXPOSE 3000

#COPY ./docker-entrypoint.sh ./docker-entrypoint.sh
#ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["npm", "run", "start"]
