import Link from 'next/link'

// Compoonents
import Layout from '@components/Layout'
import Card from '@components/Card'

// Data
import { DATA_HOME } from '@utils/mockData'

// Image
import homePlacard from '../public/images/home-placard.png'
import homeCave from '../public/images/home-cave.png'
import homeStudio from '../public/images/home-studio.png'

const Home = () => {
	return (
		<Layout pageTitle='De combien d’espace avez-vous besoin ?'>
			<section className='section-page'>
				<div className='flex flex-column flex-centered'>
					<div className='card-list flex flex-row flex-centered'>
						<Card
							srcImage={homePlacard}
							altImage='placard'
							data={DATA_HOME.placard}
						/>
						<Card srcImage={homeCave} altImage='cave' data={DATA_HOME.cave} />
						<Card srcImage={homeStudio} altImage='placard' data={DATA_HOME.studio} />
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
