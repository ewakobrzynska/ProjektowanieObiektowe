#!/bin/bash

# Ustawienia
BASE_URL="http://localhost:8000"  # Adres URL naszej aplikacji
ENDPOINT="/products"              # Endpoint do obsługi operacji CRUD dla produktów

# Test tworzenia nowego produktu
function create_product {
    echo "Test tworzenia nowego produktu..."
    DATA='{"name": "Nowy produkt", "price": 9.99, "description": "Opis nowego produktu"}'
    curl -X POST -H "Content-Type: application/json" -d "$DATA" "$BASE_URL$ENDPOINT"
    echo ""
}

# Test pobierania informacji o produkcie o ID=1
function get_product {
    echo "Test pobierania informacji o produkcie o ID=1..."
    curl -X GET "$BASE_URL$ENDPOINT/1"
    echo ""
}

# Test aktualizacji istniejącego produktu o ID=1
function update_product {
    echo "Test aktualizacji istniejącego produktu o ID=1..."
    DATA='{"name": "Zaktualizowany produkt", "price": 14.99, "description": "Nowy opis produktu"}'
    curl -X PUT -H "Content-Type: application/json" -d "$DATA" "$BASE_URL$ENDPOINT/1"
    echo ""
}

# Test usunięcia produktu o ID=1
function delete_product {
    echo "Test usunięcia produktu o ID=1..."
    curl -X DELETE "$BASE_URL$ENDPOINT/1"
    echo ""
}

# Wykonaj testy
create_product
get_product
update_product
delete_product
