import '../styles/styles.scss'
import { ContextProvider } from '@context/stepContext'

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
	)
}

export default MyApp
