// src/App.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Select from 'react-select';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f7f8fa;
  min-height: 100vh;
`;

const SwapForm = styled.form`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
`;

const App = () => {
  const [tokens, setTokens] = useState([]);
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get('https://interview.switcheo.com/prices.json')
      .then(response => {
        const validTokens = response.data.map((token) => ({
          label: token?.currency,
          value: token?.price,
          icon: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${token?.currency}.svg`
        }))
        setTokens(validTokens);
      })
      .catch(error => console.error('Error fetching token prices:', error));
  }, []);

  const handleSwap = (event) => {
    event.preventDefault();
    if (!fromToken || !toToken || !amount) {
      setError('Please fill out all fields');
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    const resultAmount = (amount / fromToken.value) * toToken.value;
    setResult(`${amount} ${fromToken.label} = ${resultAmount.toFixed(6)} ${toToken.label}`);
    setError('');
  };

  return (
    <Container>
      <SwapForm onSubmit={handleSwap}>
        <Title>Currency Swap</Title>
        <Select
          options={tokens}
          placeholder="From Token"
          onChange={setFromToken}
          value={fromToken}
          getOptionLabel={option => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={option.icon} alt={option.label} style={{ width: 20, height: 20, marginRight: 10 }} />
              {option.label}
            </div>
          )}
        />
        <Select
          options={tokens}
          placeholder="To Token"
          onChange={setToToken}
          value={toToken}
          getOptionLabel={option => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={option.icon} alt={option.label} style={{ width: 20, height: 20, marginRight: 10 }} />
              {option.label}
            </div>
          )}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button type="submit">Swap</Button>
        {result && <p>{result}</p>}
      </SwapForm>
    </Container>
  );
};

export default App;
