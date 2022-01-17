import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useStepContext } from '@context/stepContext'
import Layout from '@components/Layout'

const schema = yup
	.object({
		firstName: yup.string().required('Ce champ est obligatoire'),
		lastName: yup.string().required('Ce champ est obligatoire'),
		phoneNumber: yup
			.string()
			.required('Ce champ est obligatoire')
			.min(10, 'Il doit y avoir au minimum 10 charactères')
			.max(10, 'Il doit y avoir au maximum 10 charactères'),
		email: yup
			.string()
			.email('Ce champ doit correspond au bon format')
			.required('Ce champ est obligatoire'),
	})
	.required()

const Contact = () => {
	const { dispatch } = useStepContext()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: { firstName: '', lastName: '', phoneNumber: '', email: '' },
		mode: 'onChange',
	})

	const _handleOnSubmit = (data) => {
		const { email, firstName, lastName, phoneNumber } = data
		dispatch({
			type: 'ADD_USER_STEP',
			payload: { email, firstName, lastName, phoneNumber },
		})
		reset({ firstName: '', lastName: '', phoneNumber: '', email: '' })
	}

	return (
		<Layout pageTitle='Votre devis est prêt ! Recevez-le par e-mail immédiatement :'>
			<div className='flex flex-row flex-centered'>
				<form className='form' onSubmit={handleSubmit(_handleOnSubmit)}>
					<div className='form-input-wrapper flex flex-column'>
						<label className='form-label' htmlFor='firstName'>
							Votre prénom
						</label>
						<input className='form-input' {...register('firstName')} />
						{errors && (
							<p className='form-message--error'>{errors.firstName?.message}</p>
						)}
					</div>
					<div className='form-input-wrapper flex flex-column'>
						<label className='form-label' htmlFor='lastName'>
							Votre nom
						</label>
						<input className='form-input' {...register('lastName')} />
						{errors && (
							<p className='form-message--error'>{errors.lastName?.message}</p>
						)}
					</div>
					<div className='form-input-wrapper flex flex-column'>
						<label className='form-label' htmlFor='phoneNumber'>
							Votre numéro de téléphone
						</label>
						<input className='form-input' {...register('phoneNumber')} />
						{errors && (
							<p className='form-message--error'>{errors.phoneNumber?.message}</p>
						)}
					</div>
					<div className='form-input-wrapper flex flex-column'>
						<label className='form-label' htmlFor='email'>
							Votre adresse e-mail
						</label>
						<input type='email' className='form-input' {...register('email')} />
						{errors && <p className='form-message--error'>{errors.email?.message}</p>}
					</div>

					<input type='submit' disabled={!isValid} className='btn' />
				</form>
			</div>
		</Layout>
	)
}

export default Contact
