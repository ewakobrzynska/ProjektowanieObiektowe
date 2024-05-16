# Użyj oficjalnego obrazu Node.js jako bazowego obrazu
FROM node:latest as build

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pliki aplikacji klienta do kontenera
COPY . .

# Zainstaluj zależności aplikacji klienta
RUN npm install

# Wykonaj budowę aplikacji klienta
RUN npm run build

# Utwórz obraz dla aplikacji klienta
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

