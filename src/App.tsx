import blackLogo from './assets/lgv-logo-horizontal-trans.svg'
import styles from './app.module.css'

function App() {
	return (
		<div className={styles.container}>
			<a href='http://lagaritaverde.com/'>
				<img
					className={styles.landingLogo}
					src={blackLogo}
					alt='logo'
				/>
			</a>
			<small className={styles.register}>A game development company</small>
			<p className={styles.headline}>
				<strong className={styles.highlight}>Ticket Scanner app</strong> coming
				soon..
			</p>
		</div>
	)
}

export default App
