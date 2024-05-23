# Dockerfile dla aplikacji klienta
# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:my-app

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki aplikacji serwerowej do kontenera
COPY package.json ./
COPY src ./src

# Zainstaluj zależności aplikacji serwerowej
RUN npm install

# Domyślnie uruchom serwer
CMD ["npm", "start"]
