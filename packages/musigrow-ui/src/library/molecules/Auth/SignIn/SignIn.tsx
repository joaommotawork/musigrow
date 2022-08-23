import { Button } from '@library/atoms';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
	email: string;
	password: string;
}

export interface SignInProps {
	title: string;
	labelEmail: string;
	labelPassword: string;
	emailErrorMessage: string;
	passwordErrorMessage: string;
	labelButton: string;
	submitForm: (data: { email: string; password: string }) => void;
}

export const SignIn = ({
	title,
	labelEmail,
	labelPassword,
	emailErrorMessage,
	passwordErrorMessage,
	labelButton,
	submitForm,
}: SignInProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => submitForm(data);

	return (
		<div className='flex h-full flex-col items-center justify-center'>
			<h1 className='text-2xl font-medium uppercase text-red-500'>
				{title}
			</h1>
			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
				<div className='relative mb-4'>
					<label
						htmlFor='email'
						className='text-sm leading-7 text-gray-600'>
						{labelEmail}
					</label>
					<input
						{...register('email', {
							required: true,
						})}
						type='email'
						id='email'
						name='email'
						className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
					/>
					<span>
						{errors.email?.type === 'required' && emailErrorMessage}
					</span>
				</div>
				<div className='relative mb-4'>
					<label
						htmlFor='password'
						className='text-sm leading-7 text-gray-600'>
						{labelPassword}
					</label>
					<input
						{...register('password', { required: true })}
						type='password'
						id='password'
						name='password'
						className='w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200'
					/>
					<span>
						{errors.password?.type === 'required' &&
							passwordErrorMessage}
					</span>
				</div>
				<Button buttonOnClick={handleSubmit(onSubmit)}>
					{labelButton}
				</Button>
			</form>
		</div>
	);
};

export default SignIn;
