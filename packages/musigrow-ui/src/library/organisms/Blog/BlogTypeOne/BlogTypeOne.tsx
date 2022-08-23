import { BlogCardTypeOneProps, BlogCardTypeOne } from '@library/molecules';
import { Fragment } from 'react';

export interface BlogTypeOneProps {
	items: BlogCardTypeOneProps[];
}

export const BlogTypeOne = ({ items }: BlogTypeOneProps) => {
	return (
		<section className='grid w-full grid-cols-1 justify-items-center gap-5 overflow-hidden sm:grid-cols-2 lg:grid-cols-4'>
			{items.map((item, index) => {
				return (
					<Fragment key={`blog-card-type-one-${index}`}>
						<BlogCardTypeOne {...item} />
					</Fragment>
				);
			})}
		</section>
	);
};

export default BlogTypeOne;
