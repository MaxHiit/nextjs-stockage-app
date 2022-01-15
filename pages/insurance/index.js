import { useStepContext } from '@context/stepContext'
import { DATA_INSURANCE } from '@utils/mockData'
import routes from '@config/routes'
import Layout from '@components/Layout'
import Card from '@components/Card'

const Insurance = () => {
	const { dispatch } = useStepContext()

	const _handleClick = (data) => {
		const { title, description, price, src } = data
		dispatch({
			type: 'ADD_INSURANCE_STEP',
			payload: { title, description, price, src },
		})
	}
	return (
		<Layout pageTitle='Avez vous besoin d’une assurance supplémentaire ?'>
			<section className='section-page summary-stockage'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						{DATA_INSURANCE.map((data) => (
							<Card
								className='card-content--auto-height'
								key={data.id}
								data={data}
								route={routes.contact}
								onClickHandle={() => _handleClick(data)}
							/>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Insurance
