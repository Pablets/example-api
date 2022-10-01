FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

# At the end, set the user to use when running this image
USER node

#Give the path of your endpoint
ENTRYPOINT ["nodemon", "/usr/src/app/server.js"]
CMD [ "node", "app.js" ]
