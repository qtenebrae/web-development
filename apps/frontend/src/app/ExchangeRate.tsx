import axios from 'axios';
import styles from './ExchangeRate.module.scss';

function ExchangeRate({
  base,
  symbol,
  setUrl,
  setActive,
}: {
  base: string;
  symbol: string;
  setUrl: (url: string) => void;
  setActive: (value: boolean) => void;
}) {
  const doucleCLickHandler = () => {
    axios
      .get('http://localhost:3000/api/currency/getRates', {
        params: { base, symbol },
      })
      .then((value) => {
        setUrl(value.data.url);
        setActive(true);
      })
      .catch(() => {
        alert('Данные валюты сломанные и не откликаются на API сайта');
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
