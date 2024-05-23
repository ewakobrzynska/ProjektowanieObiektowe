# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:latest

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki aplikacji serwerowej do kontenera
COPY . .

# Zainstaluj zależności aplikacji serwerowej
RUN npm install

# Domyślnie uruchom serwer
CMD ["npm", "start"]

