FROM node:18 AS build

WORKDIR /app

COPY ./frontend/package*.json ./

# Step 4: Install dependencies
RUN npm install

COPY ./frontend /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
