import { BlogCardTypeOneProps, BlogCardTypeOne } from '@library/molecules';
import { Fragment } from 'react';
import classnames from 'classnames';

export interface BlogTypeOneProps {
	items: BlogCardTypeOneProps[];
}

export const BlogTypeOne = ({ items }: BlogTypeOneProps) => {
	const sectionClasses = classnames({
		'grid w-full gap-5 overflow-hidden justify-items-center': true,
		'grid-cols-1': items.length >= 1 && items.length < 2,
		'grid-cols-1 sm:grid-cols-2': items.length >= 2 && items.length < 4,
		'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': items.length >= 4,
	});

	return (
		<section className={sectionClasses}>
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
