import type { NextPage } from 'next';
import { signOut, useSession } from 'next-auth/react';
import { notify } from 'reapop';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useAppDispatch } from '@app/hooks';
import { SignIn } from 'musigrow-ui';
import { signIn } from 'next-auth/react';
import { authOptions } from './api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { FaSignOutAlt } from 'react-icons/fa';

const Admin: NextPage = (locale) => {
	const { t } = useTranslation('common');
	// The `state` arg is correctly typed as `RootState` already
	const dispatch = useAppDispatch();
	const { data: session } = useSession();

	const onSubmit = async ({ email, password }: any) => {
		const result = await signIn('credentials', {
			redirect: false,
			email,
			password,
		});
		if (result?.ok) {
			dispatch(
				notify('Access Grantes', 'success', {
					title: 'Success',
				}),
			);
			return;
		}
		dispatch(
			notify('Access Denied', 'error', {
				title: 'Error',
			}),
		);
	};

	if (typeof window === 'undefined') return null;

	return (
		<>
			<Head>
				<title>{t('admin.headTitle')} | Orquestra ISTEC</title>
			</Head>

			<div className='flex h-full flex-col items-center justify-center'>
				{session ? (
					<button onClick={signOut as any}>
						<FaSignOutAlt />
					</button>
				) : (
					<SignIn
						title={t('admin.signIn.title')}
						labelEmail={t('admin.signIn.email')}
						labelPassword={t('admin.signIn.password')}
						emailErrorMessage={t('admin.signIn.emailErrorMessage')}
						passwordErrorMessage={t(
							'admin.signIn.passwordErrorMessage',
						)}
						labelButton={t('admin.signIn.labelButton')}
						submitForm={(data) => onSubmit(data)}
					/>
				)}
			</div>
		</>
	);
};

export async function getServerSideProps(context: any) {
	const session = await unstable_getServerSession(
		context.req,
		context.res,
		authOptions,
	);

	return {
		props: {
			...(await serverSideTranslations(context.locale, ['common'])),
			// Will be passed to the page component as props
			session: JSON.parse(JSON.stringify(session)),
		},
	};
}

export default Admin;
