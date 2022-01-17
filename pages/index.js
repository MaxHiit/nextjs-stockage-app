import Link from 'next/link'
import { useStepContext } from '@context/stepContext'
import { DATA_HOME } from '@utils/mockData'
import routes from '@config/routes'
import Layout from '@components/Layout'
import Card from '@components/Card'

const Home = () => {
	const { dispatch } = useStepContext()

	const _handleClick = (data) => {
		const { title, price, stockage, cubic_meter, src } = data
		dispatch({
			type: 'ADD_STOCKAGE_STEP',
			payload: { title, price, stockage, cubic_meter, src },
		})
	}
	return (
		<Layout pageTitle='De combien d’espace avez-vous besoin ?'>
			<section className='section-page'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						{DATA_HOME.map((data, key) => (
							<Card
								key={key + data.id}
								data={data}
								route={routes.summary}
								onClickHandle={() => _handleClick(data)}
							/>
						))}
					</div>
					<Link href='/'>
						<a className='link home-link'>
							Aidez-moi à estimer mon volume de stockage
						</a>
					</Link>
				</div>
			</section>
		</Layout>
	)
}

export default Home
