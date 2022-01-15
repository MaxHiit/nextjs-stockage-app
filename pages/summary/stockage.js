import { useStepContext } from '@context/stepContext'

import Layout from '@components/Layout'
import Image from '@components/Image'
import Button from '@components/Button'
import routes from '@config/routes'

const Stockage = () => {
	const { steps } = useStepContext()

	return (
		<Layout pageTitle='Votre tarif de stockage'>
			<section className='section-page summary-stockage'>
				<div className='flex flex-column flex-centered'>
					{steps?.stockage_step.src && (
						<Image src={steps?.stockage_step.src} alt={steps?.stockage_step.title} />
					)}

					<p suppressHydrationWarning className='summary-stockage-price'>
						{steps.stockage_step.price}€/mois
					</p>
					<p className='summary-stockage-volume'>
						Pour un volume de {steps.stockage_step.cubic_meter}
					</p>
					<p className='summary-stockage-content'>
						Bonne nouvelle ! Vous économisez 30% par rapport à un box de stockage
						traditionnel de taille équivalente.
					</p>
					<div className='flex flex-row'>
						<div className='summary-stockage-advantage'>
							<p className='summary-stockage-advantage-title'>Les + de Gilbert :</p>
							<ul className='summary-stockage-advantage-list'>
								<li className='summary-stockage-advantage-item'>
									<p className='summary-stockage-advantage-item--green'>
										√ GRATUIT : accès illimité à vos affaires
									</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p className='summary-stockage-advantage-item--green'>
										√ INCLUS : relivraison à tout moment
									</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p className='summary-stockage-advantage-item--green'>
										√ PAS de cadenas nécessaire
									</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p className='summary-stockage-advantage-item--green'>
										√ PAS de frais de dossier
									</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p className='summary-stockage-advantage-item--green'>√ Prix bloqué</p>
								</li>
							</ul>
						</div>
						<div className='summary-stockage-advantage'>
							<p className='summary-stockage-advantage-title'>
								Vos affaires en toute sécurité
							</p>
							<ul className='summary-stockage-advantage-list'>
								<li className='summary-stockage-advantage-item'>
									<p>double périmètre de sécurité</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>Vidéosurveillance 24h/24</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>Détecteur de mouvement</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>système anti-incendie</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>Suivi température et humidité 7j/7</p>
								</li>
							</ul>
						</div>
					</div>
					<Button hrefLink={routes.packaging}></Button>
				</div>
			</section>
		</Layout>
	)
}

export default Stockage
