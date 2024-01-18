import blackLogo from './assets/lagaritaverde-logo-sintypo-trans.png'
import styles from './app.module.css'

function App() {
	return (
		<div className={styles.container}>
			<img
				className={styles.landingLogo}
				src={blackLogo}
				alt='logo'
			/>
			<p className={styles.headline}>
				<strong className={styles.highlight}>Ticket Scanner</strong> coming
				soon..
			</p>
			<small className={styles.register}>by La Garita Verde</small>
		</div>
	)
}

export default App
