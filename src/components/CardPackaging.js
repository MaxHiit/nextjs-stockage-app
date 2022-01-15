import Image from '@components/Image'
import Button from '@components/Button'

const CardPackaging = ({ data, route, onClickHandle, className = '' }) => {
	const { title, description, tags, src } = data

	return (
		<div className='card card-packaging'>
			<Image src={src} alt={title} />
			<div className={`${className} card-content flex flex-column flex-centered`}>
				<h2 className='card-content-title'>{title}</h2>
				<p className='card-content-description'>{description}</p>
			</div>
			<div className='card-packaging-bottom flex flex-row'>
				<div className='card-tag-wrapper'>
					{tags &&
						tags.map((tag, index) => (
							<p key={index} className='card-tag'>
								{tag}
							</p>
						))}
				</div>
				<Button onClick={onClickHandle} hrefLink={route} />
			</div>
		</div>
	)
}

export default CardPackaging
