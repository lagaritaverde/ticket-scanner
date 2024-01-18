import blackLogo from './assets/lagaritaverde-logo-sintypo.png'
import styles from './app.module.css'

function App() {
	return (
		<div className={styles.container}>
			<img
				src={blackLogo}
				alt='logo'
				width='400px'
			/>
			<p>La garita verde coming soon..</p>
		</div>
	)
}

export default App
