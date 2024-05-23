package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Payment struct {
	Name           string `json:"name"`
	CardNumber     string `json:"cardNumber"`
	ExpirationDate string `json:"expirationDate"`
	CVV            string `json:"cvv"`
}

func handleOptions(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3001")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "*")
	w.WriteHeader(http.StatusOK)
}

func handlePayments(w http.ResponseWriter, r *http.Request) {
    if r.Method == "OPTIONS" {
        handleOptions(w, r)
        return
    }

    var payment Payment
    if err := json.NewDecoder(r.Body).Decode(&payment); err != nil {
        http.Error(w, err.Error(), http.StatusBadRequest)
        return
    }

    responseData := map[string]string{"message": "Payment processed successfully", "data": fmt.Sprintf("%+v", payment)}
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3001")
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(responseData)
}

func main() {
	http.HandleFunc("/payments", handlePayments)
	log.Fatal(http.ListenAndServe(":3000", nil))
}

