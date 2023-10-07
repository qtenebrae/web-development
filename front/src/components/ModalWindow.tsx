import styles from '../css/ModalWIndow.module.css';

interface IModal {
	active: boolean;
	setActive: (flag: boolean) => void;
	url: string;
	setUrl: (url: string) => void;
}

function ModalWindow(props: IModal) {
	const { active, setActive, url, setUrl } = props;
	return (
		<div
			className={`${styles.modal} ${active ? styles.modalActive : ''}`}
			onMouseDown={() => {
				setActive(false);
				setUrl('');
			}}
		>
			<div
				className={`${styles.modal__content} ${active ? styles.modal__contentActive : ''}`}
				onMouseDown={(e) => e.stopPropagation()}
			>
				<img src={url} alt="" />
			</div>
		</div>
	);
}

export default ModalWindow;
