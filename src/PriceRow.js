import currencyFormatter from 'currency-formatter';
import { useState, useEffect } from 'react';

function PriceRow({ price, currency }) {
  const [converter, setConverter] = useState('1');

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "VOD4CSn0wDcXZwPEeHWz92r8WoTp8Ow1");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    if(currency !== 'USD'){
      fetch(`https://api.apilayer.com/fixer/latest?base=USD&symbols=${currency}`, requestOptions)
        .then(res => res.json())
        // .then((json) => console.log(json))
        .then((json) => { setConverter(json.rates[currency])})
        .catch(error => console.log('error', error));
    } else{
      setConverter(converter); 
    }
    
  }, [currency]); 

  return <>{currencyFormatter.format(price * converter, { code: currency })}</>;
}

export default PriceRow;