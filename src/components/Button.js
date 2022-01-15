import Link from 'next/link'

const Button = ({ onClick = null, hrefLink = '/' }) => {
	return (
		<button className='btn btn--primary' onClick={onClick}>
			<Link href={hrefLink}>
				<a>Sélectionner</a>
			</Link>
		</button>
	)
}

export default Button
