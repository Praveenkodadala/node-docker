# Docker 

# Docker Cheat Sheet and IBM Cloud Container Registry Commands

Docker is a platform used for developing, shipping, and running applications as containers. Containers allow you to package an application and its dependencies in a consistent environment, ensuring that it runs reliably across different systems.

**Client -> Docker Host <--> Registry**

**Docker Files -- Build -> Container Image (Docker Image) <- Push/Pull -> Registry**

**Docker to create container steps:**
-use an existing base image or a Docker file.
-issue *BUILD command that creates a container image with a name.
-issue the *PUSH command to store the container image to registry.
-the host first checks locally if the image is already available.
-then issues the *RUN command with the image name to create the container.
-if the image is unavailable with in the host, the docker client connects to the registry and pulls the image to the host.
-the deamon then create a running container using the image.




## Cheat Sheet: Docker CLI

### Basic Commands:

Install docker and docker desktop.


- `docker --version`: Displays the version of the Docker CLI.
- `curl localhost`: Pings the application.  (curl localhost:8080)
- `docker build .`: Builds an image from a Dockerfile.
- `docker build . -t image_name:tag`: Builds the image and tags it with a name and tag.  (docker build -t myimage:v1)
- `docker`: Start the Docker command line interface.
- `docker container rm container_id`: Removes a container.
- `docker images`: Lists the available images.
- `docker ps`: Lists running containers.
- `docker ps -a`: Lists all containers, including those that have exited.
- `docker pull image_name:tag`: Pulls the latest image or repository from a registry.
- `docker push image_name:tag`: Pushes an image or a repository to a registry.
- `docker run image_name:tag`: Runs a command in a new container.
- `docker run -p host_port:container_port image_name:tag`: Runs the container and publishes ports.
- `docker run -dp 8080:8080 myimage:v1`:  this will allocate unique code by docker 
- `docker stop container_id`: Stops a running container.
- `docker ps -q` : List of all running containers
- `docker stop $(docker ps -q)`: Stops all running containers.
- `docker tag source_image:tag target_image:tag`: Creates a tag for a target image referring to a source image.
- `exit`: Closes the terminal session.

- `git clone repository_url`: Clones the Git repository containing the artifacts.

### IBM Cloud Container Registry Commands:
 Push the image to IBM Cloud container registry.
 IBM Cloud CLI need to be installed.
 an API key for authentication, we can use it instead of your password.
 
- `ibmcloud login --apikey <your-api-key>`: Replace <your-api-key> with the actual API key you generated.
- `ibmcloud plugin install container-registry`: This command will prompt you to log in to IBM Cloud Container Registry.
- `ibmcloud cr images`: Lists images in the IBM Cloud Container Registry.
- `ibmcloud cr login`: Logs your local Docker daemon into IBM Cloud Container Registry.
- `export MY_NAMESPACE`: Exports a namespace as an environment variable. (export MY_NAMESPACE = sn-labs-$username)
- `ibmcloud cr namespaces`: Views the namespaces you have access to.
- `ibmcloud cr region-set region_name`: Ensures that you are targeting the region appropriate to your cloud account.
- `ibmcloud target`: Provides information about the account you're targeting.
- `ibmcloud version`: Displays the version of the IBM Cloud CLI.
- `docker push <region>.icr.io/<namespace>/nodedockerimage:v1` : region (us)


- Public registry - Docker hub