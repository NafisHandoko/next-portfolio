FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Install all deps including dev deps
RUN npm install

# Copy source later — actually will be overwritten by bind mount in compose
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
