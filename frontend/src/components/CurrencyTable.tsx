import { useState } from 'react';
import styles from '../css/CurrencyTable.module.css';
import ExchangeRate from './ExchangeRate';
import ModalWindow from './ModalWindow';

export function CurrencyTable() {
	const [active, setActive] = useState(false);
	const [url, setUrl] = useState('');
	const ratesComponent = [
		{ id: 1, from: 'EUR', to: 'USD', setUrl, setActive },
		{ id: 2, from: 'USD', to: 'EUR', setUrl, setActive },
		{ id: 3, from: 'EUR', to: 'RUB', setUrl, setActive },
		{ id: 4, from: 'USD', to: 'RUB', setUrl, setActive },
	];
	return (
		<div className={styles.container}>
			{ratesComponent.map(
				(component: { id: number; from: string; to: string; setUrl: (url: string) => void }) => {
					return (
						<ExchangeRate
							key={component.id}
							from={component.from}
							to={component.to}
							setUrl={component.setUrl}
							setActive={setActive}
						/>
					);
				},
			)}
			<ModalWindow url={url} active={active} setActive={setActive} setUrl={setUrl} />
		</div>
	);
}

export default CurrencyTable;
