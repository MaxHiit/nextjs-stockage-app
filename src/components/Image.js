import Image from 'next/image'

const CustomImage = ({ src, alt, ...props }) => {
	return (
		<div className='image-wrapper'>
			<Image
				className='image'
				src={src}
				alt={alt}
				layout='fill'
				objectFit='contain'
				{...props}
			/>
		</div>
	)
}

export default CustomImage
