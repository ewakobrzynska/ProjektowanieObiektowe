package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Product struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

var products = []Product{
	{1, "Usługa 1", 50},
	{2, "Usługa 2", 100},
	{3, "Usługa 3", 150},
}

func handleProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func handlePayments(w http.ResponseWriter, r *http.Request) {
	// Obsługa płatności...
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"message": "Payment processed successfully"})
}

func main() {
	http.HandleFunc("/products", handleProducts)
	http.HandleFunc("/payments", handlePayments)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

