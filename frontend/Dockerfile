# Build and serve stage
FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with specific versions
RUN npm cache clean --force && \
    npm install -g @angular/cli@17.1.0 && \
    npm install --legacy-peer-deps && \
    npm install @angular-devkit/build-angular@17.1.0 && \
    npm install esbuild@0.21.5 @esbuild/linux-x64@0.21.5 --save-exact --force

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 4200

# Start the application with ng serve
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check", "--configuration", "development"] 