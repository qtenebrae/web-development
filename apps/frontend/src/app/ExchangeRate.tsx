import axios from 'axios';
import styles from './ExchangeRate.module.scss';
import { useState } from 'react';

function ExchangeRate({
  base,
  symbol,
  setUrl,
}: {
  base: string;
  symbol: string;
  setUrl: (url: string) => void;
}) {
  const doucleCLickHandler = () => {
    axios
      .get('http://localhost:3000/api/currency/getRates', {
        params: { base, symbol },
      })
      .then((value) => {
        setUrl(value.data.url);
      });
  };
  return (
    <div className={styles.container} onDoubleClick={doucleCLickHandler}>
      <div className={styles.td}>{base}</div>
      <div className={styles.td}>{symbol}</div>
    </div>
  );
}

export default ExchangeRate;
