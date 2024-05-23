# Dockerfile dla aplikacji klienta
# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:latest

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki aplikacji klienta do kontenera
COPY . .

# Zainstaluj zależności aplikacji klienta
RUN npm install

# Wykonaj budowanie aplikacji klienta
RUN npm run build

# Skopiuj plik index.html do katalogu build
RUN cp public/index.html build/index.html

# Domyślnie uruchom serwer
CMD ["npm", "start"]

