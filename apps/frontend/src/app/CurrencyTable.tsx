import { useState } from 'react';
import styles from './CurrencyTable.module.scss';
import ExchangeRate from './ExchangeRate';
import ModalWindow from './ModalWindow';

export function CurrencyTable() {
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState('');
  const ratesComponent = [
    { id: 1, base: 'EUR', symbol: 'USD', setUrl, setActive },
    { id: 2, base: 'USD', symbol: 'EUR', setUrl, setActive },
    { id: 3, base: 'EUR', symbol: 'RUB', setUrl, setActive },
    { id: 4, base: 'USD', symbol: 'RUB', setUrl, setActive },
  ];
  return (
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
              setActive={setActive}
            />
          );
        }
      )}
      <ModalWindow
        url={url}
        active={active}
        setActive={setActive}
        setUrl={setUrl}
      />
    </div>
  );
}

export default CurrencyTable;
