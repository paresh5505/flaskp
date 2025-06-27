FROM node:16

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Run the app
CMD ["node", "server.js"]
