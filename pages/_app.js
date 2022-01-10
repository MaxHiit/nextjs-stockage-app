import '../styles/styles.scss'
import { ContextProvider } from '@context/UserContext'

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default MyApp
