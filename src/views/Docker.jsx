import CodeBlock from "../components/CustomCodeBlock"
import SourceLink from "../components/SourceLink";

export default function Docker() {

const docker1 =
`docker build -t <image_name>:<tag> <path_to_Dockerfile>`

const docker3 =
`docker images
`

const docker4 =
`docker run <image_name>:<tag>
`

const docker5 =
`docker ps
`

const docker6 =
`docker ps -a
`

const docker7 =
`docker stop <container_id or container_name>
`

const docker8 =
`docker rm <container_id or container_name>
`

const docker9 =
`docker-compose up
`

const docker10 =
`docker-compose down
`

const docker11 =
`docker push <image_name>:<tag>
`

const docker12 =
`docker pull <image_name>:<tag>
`

const realUse1 =
`# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents to /app
COPY . .

# Expose port 3000
EXPOSE 3000

# Define the command to run your app
CMD ["node", "app.js"]
`

const realUse2 =
`docker build -t my-web-app:1.0 .
`

const realUse3 =
`docker run -p 8080:3000 my-web-app:1.0
`

const realUse4 =
`docker pull my-web-app:1.0
docker run -d -p 80:3000 my-web-app:1.0
`


  return (
    <div className="container content">
      <h2>Docker</h2>
      <p>Docker is a <span className="font-bold underline underline-offset-2">platform and tool</span> designed <strong>to make it easier to create, deploy, and run applications by using containers</strong>. Containers allow a developer to <strong>package up an application</strong> with all parts it needs, such as libraries and other dependencies, and ship it all out as one package. This ensures that the application runs reliably and consistently across various computing environments. <br />Here are some key concepts and commands related to Docker:</p>

      <h3 className="mt-10">1. Container:</h3>
      <p> A container is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools. Containers isolate the application from the host system and other containers.</p>

      <h3 className="mt-10">2. Docker Image:</h3>
      <p>A Docker image is a lightweight, standalone, and executable package that includes the necessary code, libraries, dependencies, and configuration files to run an application. Images are used to create containers.</p>

      <CodeBlock code={docker1} language={"bash"} hasDescription={true} />
      <p>Build a Docker image</p>

      <CodeBlock code={docker3} language={"bash"} hasDescription={true} />
      <p>List local Docker images</p>

      <h3 className="mt-10">3. Docker Container Lifecycle:</h3>

      <CodeBlock code={docker4} language={"bash"} hasDescription={true} />
      <p>Run a container</p>

      <CodeBlock code={docker5} language={"bash"} hasDescription={true} />
      <p>List running containers</p>

      <CodeBlock code={docker6} language={"bash"} hasDescription={true} />
      <p>List all containers (including stopped ones)</p>

      <CodeBlock code={docker7} language={"bash"} hasDescription={true} />
      <p>Stop a running container</p>

      <CodeBlock code={docker8} language={"bash"} hasDescription={true} />
      <p>Remove a container</p>

      <h3 className="mt-10">4. Docker Compose:</h3>
      <p>Docker Compose is a tool for defining and running multi-container Docker applications. It allows you to define a multi-container application in a single file, then spin up and down the application with a single command.</p>

      <CodeBlock code={docker9} language={"bash"} hasDescription={true} />
      <p>Start a Docker Compose application</p>

      <CodeBlock code={docker10} language={"bash"} hasDescription={true} />
      <p>Stop a Docker Compose application</p>

      <h3 className="mt-10">5. Docker Registry:</h3>
      <p>A Docker registry is a centralized repository for Docker images. Docker Hub is a public registry where you can find and share Docker images, but you can also set up your private registry.</p>

      <CodeBlock code={docker11} language={"bash"} hasDescription={true} />
      <p>Push an image to Docker Hub</p>

      <CodeBlock code={docker12} language={"bash"} hasDescription={true} />
      <p>Pull an image from Docker Hub</p>

      <h2 className="mt-10">Real-world use case</h2>
      <p>Imagine you have developed a web application using a specific programming language and framework, and you want to deploy it to a server. Without Docker, you might need to manually install the required dependencies, configure the environment, and ensure compatibility with the server's operating system. This process can be error-prone and time-consuming, especially when deploying to different environments.</p>

      <p>With Docker, you can containerize your web application, along with its dependencies, into a single Docker image. This image encapsulates everything needed to run your application, making it portable and eliminating many compatibility issues. Here's a step-by-step example:</p>

      <h3>Dockerizing the Web Application</h3>
      <p>Let's say you have a simple web application written in Node.js using Express framework. Create a Dockerfile in your project directory:</p>
      <CodeBlock code={realUse1} language={"bash"} hasDescription={true} />
      <p>This Dockerfile sets up a Node.js environment, installs dependencies, and specifies the command to start your application.</p>

      <h3>Building the Docker Image</h3>
      <p>Open a terminal, navigate to your project directory containing the Dockerfile, and build the Docker image:</p>
      <CodeBlock code={realUse2} language={"bash"} hasDescription={true} />
      <p>This command creates a Docker image named my-web-app with the tag 1.0.</p>

      <h3>Running the Docker Container Locally</h3>
      <p>Run the Docker container locally:</p>
      <CodeBlock code={realUse3} language={"bash"} hasDescription={true} />
      <p>This maps port 8080 on your host machine to port 3000 inside the container.</p>

      <h3>Accessing the Web Application</h3>
      <p>Open your web browser and navigate to http://localhost:8080. You should see your web application running inside the Docker container.</p>

      <h3>Deployment to Production</h3>
      <p>Once your Docker image is built and tested locally, you can deploy it to production environments. You can push your Docker image to a registry like Docker Hub or a private registry. On the production server, you can pull the Docker image and run it using similar docker run commands.</p>
      <CodeBlock code={realUse4} language={"bash"} hasDescription={true} />
      <p>This example assumes your production server is configured to handle web traffic on port 80.</p>

      <p>By using Docker, you've created a portable and reproducible environment for your web application, making deployment across different environments more manageable and consistent. Docker's isolation ensures that your application runs the same way in development, testing, and production.</p>

      <div className="sources bg-dark-300 rounded-lg p-4 mt-10">
          <h4>Sources</h4>
          <SourceLink name={"Stack Overflow"} link={"https://stackoverflow.com/"} />
          <SourceLink name={"W3 Schools"} link={"https://www.w3schools.com/"} />
          <SourceLink name={"Chat GPT"} link={"https://chat.openai.com/"} />
      </div>
    </div>
  )
}
