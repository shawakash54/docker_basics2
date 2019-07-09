# Use an existing docker image as a base
FROM alpine

# Download and install a dependency. apk is a apache package manager. Alpine has apk installed before hand
RUN apk add --update redis

# Tell the image what to do when it starts as a container - start up command
CMD["redis-server"]