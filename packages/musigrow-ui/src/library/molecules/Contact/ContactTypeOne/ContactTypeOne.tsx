import { ReactNode } from 'react';

export interface ContactTypeOneProps {
	mapIframe: any;
	title: string;
	description: ReactNode;
	contacts: ReactNode;
}

export const ContactTypeOne = ({
	mapIframe,
	title,
	description,
	contacts,
}: ContactTypeOneProps) => {
	return (
		<section className='relative w-full text-black'>
			<div className='absolute inset-0 bg-white'>{mapIframe}</div>
			<div className='mx-auto flex w-full px-5 py-24'>
				<div className='relative z-10 mt-10 flex w-full flex-col rounded-lg bg-white p-8 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3'>
					<h2 className='mb-1 text-lg font-medium text-black'>
						{title}
					</h2>
					{description && (
						<p className='mb-5 leading-relaxed text-black'>
							{description}
						</p>
					)}
					<div className='flex flex-wrap gap-2'>{contacts}</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTypeOne;
