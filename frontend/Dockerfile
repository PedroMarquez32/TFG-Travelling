FROM node:20

WORKDIR /app

# Instalar dependencias globales
RUN npm install -g @angular/cli

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias del proyecto
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Exponer el puerto
EXPOSE 4200

# Comando para ejecutar el servidor de desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"] 