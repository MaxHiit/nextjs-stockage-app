import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ children, pageTitle }) => {
	return (
		<>
			<Head>
				<title>Next JS Stockage App</title>
			</Head>
			<header className='container flex flex-centered'>
				<h1>{pageTitle}</h1>
			</header>
			<main className='container'>{children}</main>
			<footer className='container'>
				<Link href='/'>
					<a href=''>
						<div className='svg-wrapper'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path d='M0 12l9-8v6h15v4h-15v6z' />
							</svg>
						</div>
					</a>
				</Link>
			</footer>
		</>
	)
}

export default Layout
