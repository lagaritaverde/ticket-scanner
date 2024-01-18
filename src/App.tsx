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
			<p>Ticket Scanner coming soon..</p>
			<small style={{ fontSize: '18px', fontStyle: 'italic' }}>
				from La Garita Verde
			</small>
		</div>
	)
}

export default App
