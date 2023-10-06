import { useState } from 'react';
import styles from './CurrencyTable.module.scss';
import ExchangeRate from './ExchangeRate';

export function CurrencyTable() {
  const [url, setUrl] = useState('');
  const ratesComponent = [
    { id: 1, base: 'EUR', symbol: 'USD', setUrl },
    { id: 2, base: 'USD', symbol: 'EUR', setUrl },
    { id: 3, base: 'EUR', symbol: 'RUB', setUrl },
    { id: 4, base: 'USD', symbol: 'RUB', setUrl },
  ];
  console.log(url);
  return (
    <>
      <div className={styles.container}>
        {ratesComponent.map(
          (component: {
            id: number;
            base: string;
            symbol: string;
            setUrl: (url: string) => void;
          }) => {
            return (
              <ExchangeRate
                key={component.id}
                base={component.base}
                symbol={component.symbol}
                setUrl={component.setUrl}
              />
            );
          }
        )}
      </div>
      <img src={url} alt="" />
    </>
  );
}

export default CurrencyTable;
