FROM node:alpine

# while making a container, the code is not available inside the container
# it is 100% segmented off.

# COPY is used to move files and folders inbetween our hard disk
# and the container and is relative to build context which is .

COPY ./ ./

RUN npm install

CMD ["npm", "start"]
