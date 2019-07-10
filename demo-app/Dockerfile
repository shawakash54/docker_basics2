FROM node:alpine

# while making a container, the code is not available inside the container
# it is 100% segmented off.

WORKDIR /usr/app

# Copy the package.json so that when a code change is made,
# npm install won't try installing dependencies uselessly
COPY ./package.json ./
RUN npm install

# COPY is used to move files and folders inbetween our hard disk
# and the container and is relative to build context which is .

COPY ./ ./

CMD ["npm", "start"]
 