const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Lexend Deca', 'sans-serif']
		},
		extend: {
			keyframes: {
				float: {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-15px)'
					}
				}
			},
			animation: {
				float: 'float 5s ease-in-out infinite',
				'float-slow': 'float 6s ease-in-out infinite',
				'float-fast': 'float 4s ease-in-out infinite'
			},
			width: {
				'logo-small': '60px',
				'logo-large': '70px'
			}
		}
	},

	plugins: []
};

module.exports = config;
