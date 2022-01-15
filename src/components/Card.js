import Image from '@components/Image'
import Button from '@components/Button'

const Card = ({ data, route, onClickHandle }) => {
	const { title, description, stockage, price, src, benefits } = data

	return (
		<div className='card'>
			<Image src={src} alt={title} />
			<div className='card-content flex flex-column flex-centered'>
				<p className='card-content-title'>{title}</p>
				<p className='card-content-description'>{description}</p>
				{stockage && <p className='card-content-stockage'>{stockage}</p>}
				{benefits &&
					benefits.map((benefit, index) => (
						<ul key={index} className='card-benefits-list'>
							<li className='card-benefits-item'>
								<p>√ {benefit}</p>
							</li>
						</ul>
					))}
				<Button onClick={onClickHandle} hrefLink={route} />
				<p className='card-content-price'>{price}€ /mois</p>
			</div>
		</div>
	)
}

export default Card
