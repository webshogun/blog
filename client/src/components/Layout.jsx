import { Fragment } from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<div className='container mx-auto'>
				<Navbar />
				{children}
			</div>
		</Fragment>
	);
};

export default Layout;
