import Image from 'next/image'
import Layout from '@components/Layout'
import { useUserContext } from '@context/UserContext'
import React from 'react'

import summaryStockage from '../../public/images/summary-stockage.png'

const Stockage = () => {
	const { userData } = useUserContext()
	console.log(summaryStockage)

	return (
		<Layout pageTitle='Votre tarif de stockage'>
			<section className='section-page summary-stockage'>
				<div className='flex flex-column flex-centered'>
					<div className='image-wrapper'>
						<Image
							src={summaryStockage}
							alt='summary stockage'
							width={200}
							height={200}
							layout='responsive'
						/>
					</div>
					<p className='summary-stockage-price'>24€/mois</p>
					<p className='summary-stockage-volume'>Pour un volume de 0.5m3</p>
					<p className='summary-stockage-content'>
						Bonne nouvelle ! Vous économisez 30% par rapport à un box de stockage
						traditionnel de taille équivalente.
					</p>
					<div className='flex flex-row'>
						<div className='summary-stockage-advantage'>
							<p className='summary-stockage-box__title'>Les + de Gilbert :</p>
							<ul className='summary-stockage-advantage-list'>
								<li className='summary-stockage-advantage-item'>
									<p>√ GRATUIT : accès illimité à vos affaires</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>√ INCLUS : relivraison à tout moment</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>√ PAS de cadenas nécessaire</p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>√ PAS de frais de dossier </p>
								</li>
								<li className='summary-stockage-advantage-item'>
									<p>√ Prix bloqué</p>
								</li>
							</ul>
						</div>
						<div className='summary-stockage-advantage'>
							<p className='summary-stockage-box__title'>
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
				</div>
			</section>
		</Layout>
	)
}

export default Stockage
