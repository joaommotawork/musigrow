import AuthLogo from './extensions/my-logo.svg';
import MenuLogo from './extensions/logo.svg';
import favicon from './extensions/favicon.ico';

const config = {
	// Replace the Strapi logo in auth (login) views
	auth: {
		logo: AuthLogo,
	},
	// Replace the favicon
	head: {
		favicon: favicon,
	},
	// Add a new locale, other than 'en'
	locales: ['en', 'pt'],
	// Replace the Strapi logo in the main navigation
	menu: {
		logo: MenuLogo,
	},
	// Override or extend the theme
	theme: {
		colors: {
			primary100: '#C2C5CC',
			primary200: '#ACB0BA',
			primary500: '#6B7280',
			primary600: '#515761',
			primary700: '#383C43',
			danger700: '#b72b1a',
		},
	},
	// Extend the translations
	translations: {
		en: {
			'Auth.form.welcome.subtitle': ' ',
			'Auth.form.welcome.title': 'Admin',
			'Auth.form.button.login.strapi': 'Log in',
			'Settings.permissions.users.listview.header.subtitle':
				'All the users who have access to the admin panel',
			'app.components.LeftMenu.navbrand.title': 'Dashboard',
			'app.components.LeftMenu.navbrand.workplace': ' ',
		},
		pt: {
			'Auth.form.welcome.subtitle': ' ',
			'Auth.form.welcome.title': 'Admin',
			'Auth.form.button.login.strapi': 'Log in',
			'Settings.permissions.users.listview.header.subtitle':
				'Todos os utilizadores que têm acesso ao painel de administrador',
			'app.components.LeftMenu.navbrand.title': 'Dashboard',
			'app.components.LeftMenu.navbrand.workplace': ' ',
		},
	},
	// Disable video tutorials
	tutorials: false,
	// Disable notifications about new Strapi releases
	notifications: { release: false },
};

const bootstrap = (app) => {
	console.log(app);
};

export default {
	config,
	bootstrap,
};
