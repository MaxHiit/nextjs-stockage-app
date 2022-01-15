import { useStepContext } from '@context/stepContext'
import { DATA_TRANSPORT } from '@utils/mockData'
import routes from '@config/routes'
import Layout from '@components/Layout'
import Card from '@components/Card'

const Transport = () => {
	const { dispatch } = useStepContext()

	const _handleClick = (data, e) => {
		e.preventDefault()
		const { title, price, benefits, src } = data
		dispatch({
			type: 'ADD_TRANSPORT_STEP',
			payload: { title, price, benefits, src },
		})
	}

	return (
		<Layout pageTitle='Comment voulez-vous transporter vos affaires en stockage ?'>
			<section className='section-page'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						{DATA_TRANSPORT.map((data, index) => (
							<Card
								key={index + data.id}
								data={data}
								route={routes.insurance}
								onClickHandle={(e) => _handleClick(data, e)}
							/>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Transport
