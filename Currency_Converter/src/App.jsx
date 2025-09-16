import { useState, useMemo, useCallback } from 'react'

import './App.css'

function App() {
  const [currency, setCurrency] = useState('USD')

  const [convertCurrency, setconvertCurreny] = useState('USD')

  const [givenCurrency, setgivenCurrency] = useState(1);

  const exchangeRates = useMemo(() => ({
    USD: 1,
    IND: 88.05,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 147.3
  }), []);

  const handleChange = useCallback((event) => {
    setCurrency(event.target.value);
  }, []);

  const handleConvertCurrency = useCallback((event) => {
    setconvertCurreny(event.target.value);
  }, []);

  const handleConverter = useCallback((event) => {
    setgivenCurrency(event.target.value);
    console.log(event.target.value);
  }, []);

  const handleConversion = useCallback(() => {
    return (givenCurrency * exchangeRates[convertCurrency]) / exchangeRates[currency];
  }, [givenCurrency, convertCurrency, currency, exchangeRates]);

  

  



  return (
    <>
      <div className="container">

        <div className="app">
          <div className="title">
            <h2>Currency Converter</h2>
            <p>{`${currency} to ${convertCurrency} converter`}</p>
          </div>
          <div className="amount">
            <input type="number" name="" id="" placeholder='Enter amount ' onChange={handleConverter} value={givenCurrency} />
          </div>

          <div className="currency">
            <label htmlFor="currencyChoices">Start currency</label>
            <select id="currencyChoices" onChange={handleChange} value={currency} >
              <option value="USD">USD</option>
              <option value="IND">IND</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>
          </div>

          <div className="convertTo">

            <label htmlFor="convertToChoices">Target currency</label>
            <select id="convertToChoices" onChange={handleConvertCurrency} value={convertCurrency}>
              <option value="USD">USD</option>
              <option value="IND">IND</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="JPY">JPY</option>
            </select>

          </div>

          <div className="solution">
            <h3>Converted amount:</h3> 
            <p id='result'>{`${handleConversion().toFixed(2)} ${convertCurrency}`}</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
