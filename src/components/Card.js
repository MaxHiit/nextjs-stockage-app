import Image from 'next/image'
import { useUserContext } from '@context/UserContext'

const Card = ({ srcImage, altImage, data }) => {
	const { title, description, stockage, price, cubic_meter } = data
	const { setUserData } = useUserContext()

	const _handleClick = (e) => {
		e.preventDefault()
		setUserData({ stockage_step: { title, price, stockage, cubic_meter } })
	}

	return (
		<div className='card'>
			<Image src={srcImage} alt={altImage} layout='responsive' />
			<div className='card-content flex flex-column flex-centered'>
				<p className='card-content-title'>{title}</p>
				<p className='card-content-description'>{description}</p>
				<p className='card-content-stockage'>{stockage}</p>
				<button className='btn card-button' onClick={_handleClick}>
					Sélectionner
				</button>
				<p className='card-content-price'>{price}€ /mois</p>
			</div>
		</div>
	)
}

export default Card
