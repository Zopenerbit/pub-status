FROM node:18

# Set working directory
WORKDIR /app

# Copy all files to /app
COPY . .

# Masuk ke dalam folder backend
WORKDIR /app/backend

# Install backend dependencies
RUN npm install

# Jalankan server
CMD ["node", "server.js"]
