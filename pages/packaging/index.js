import { useStepContext } from '@context/stepContext'
import { DATA_PACKAGING } from '@utils/mockData'
import routes from '@config/routes'
import Layout from '@components/Layout'
import CardPackaging from '@components/CardPackaging'

export const Packaging = () => {
	const { dispatch } = useStepContext()

	const _handleClick = (data, e) => {
		const { need_help } = data
		e.preventDefault()
		dispatch({
			type: 'ADD_PACKAGING',
			payload: need_help,
		})
	}

	return (
		<Layout pageTitle='Votre tarif de stockage'>
			<section className='section-page summary-stockage'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						{DATA_PACKAGING.map((data) => (
							<CardPackaging
								className='card-packaging-content'
								key={data.id}
								data={data}
								route={routes.transport}
								onClickHandle={(e) => _handleClick(data, e)}
							/>
						))}
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Packaging
