import blackLogo from './assets/lagaritaverde-logo-sintypo-trans.png'
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
			<p className={styles.headline}>
				<strong className={styles.highlight}>Ticket Scanner</strong> coming
				soon..
			</p>
			<small className={styles.register}>
				by <a href='http://lagaritaverde.com'>La Garita Verde</a>
			</small>
		</div>
	)
}

export default App
