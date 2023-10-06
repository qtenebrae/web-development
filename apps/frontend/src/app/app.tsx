// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import CurrencyTable from './CurrencyTable';

export function App() {
  return (
    <div className={styles.App}>
      <CurrencyTable />
    </div>
  );
}

export default App;
