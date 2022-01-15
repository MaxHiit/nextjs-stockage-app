import { useStepContext } from '@context/stepContext'
import { DATA_PACKAGING } from '@utils/mockData'
import routes from '@config/routes'
import Layout from '@components/Layout'
import Card from '@components/Card'

export const Packaging = () => {
	const { dispatch } = useStepContext()

	const _handleClick = (data) => {
		const { need_help } = data
		dispatch({
			type: 'ADD_PACKAGING',
			payload: need_help,
		})
	}

	return (
		<Layout pageTitle='Avez-vous besoin d’aide pour démonter, protéger vos meubles ou emballer vos cartons ?'>
			<section className='section-page summary-stockage'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						{DATA_PACKAGING.map((data) => (
							<Card
								className='card-content--auto-height'
								key={data.id}
								data={data}
								route={routes.transport}
								onClickHandle={() => _handleClick(data)}
							/>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Packaging
