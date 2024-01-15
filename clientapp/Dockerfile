# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Copy the node_modules folder from the user's local machine to the container
COPY node_modules ./node_modules

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the React app (you can adjust this command if needed)
RUN npm run build

# Expose the port that the React app will run on (typically 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]
