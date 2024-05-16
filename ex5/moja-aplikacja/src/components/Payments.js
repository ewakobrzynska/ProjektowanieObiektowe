import React, { useState } from 'react';

const Payments = () => {
  const [paymentData, setPaymentData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Symulacja wysyłania danych na serwer
    fetch('http://localhost:3000/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentData),
    })
    .then(response => response.json())
    .then(data => console.log('Payment successful:', data))
    .catch(error => console.error('Error processing payment:', error));
  };

  return (
    <div>
      <h2>Płatności</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Imię i nazwisko:
          <input type="text" name="name" value={paymentData.name} onChange={handleChange} />
        </label>
        <label>
          Numer karty:
          <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} />
        </label>
        <label>
          Data ważności:
          <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} />
        </label>
        <button type="submit">Zapłać</button>
      </form>
    </div>
  );
};

export default Payments;

