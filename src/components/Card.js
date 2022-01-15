import Image from '@components/Image'
import Button from '@components/Button'

const Card = ({ data, route, onClickHandle, className = '' }) => {
	const { title, description, stockage, price, tags, src, benefits } = data

	return (
		<div className='card'>
			<Image src={src} alt={title} />
			<div className={`${className} card-content flex flex-column flex-centered`}>
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
			</div>
			<div className='card-bottom flex flex-row'>
				{price !== undefined && (
					<p className='card-content-price'>
						{price === 0 ? 'GRATUIT' : `${price}€ /mois`}
					</p>
				)}
				{tags &&
					tags.map((tag, index) => (
						<div key={index} className='card-tag-wrapper'>
							<p className='card-tag'>{tag}</p>
						</div>
					))}
				<Button onClick={onClickHandle} hrefLink={route} />
			</div>
		</div>
	)
}

export default Card
