import styles from '../css/ExchangeRate.module.css';
import ExchangeRateController from '../controllers/exchangeRateController';

function ExchangeRate({
	from,
	to,
	setUrl,
	setActive,
}: {
	from: string;
	to: string;
	setUrl: (url: string) => void;
	setActive: (value: boolean) => void;
}) {
	const doucleCLickHandler = () => {
		ExchangeRateController.getGiphy(from, to)
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
			<div className={styles.td}>{from}</div>
			<div className={styles.td}>{to}</div>
		</div>
	);
}

export default ExchangeRate;
