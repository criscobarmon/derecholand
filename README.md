# Getting Started with Derecholand MVP
To build a Docker image using this file, we need to execute the below command.
```
docker build -f Dockerfile.dev .
```

To run a container with Docker volume local directory mapping, we need to use the below command.

```
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image>
```
