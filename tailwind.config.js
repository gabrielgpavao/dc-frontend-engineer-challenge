/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontFamily: {
				circular: ['var(--font-circular)']
			},
			colors: {
				'primary-dark': '#007D66',
				'primary': '#00A385',
				'primary-light': '#19ac91',
				'primary-opacity-1': '#00a3851a',
				'secondary-dark': '#F13E5E',
				'secondary-light': '#f13e5e1a',
				'neutral-dark': '#737B84',
				'neutral': '#909CAA',
				'neutral-light': '#0F4D6401',
				'black': '#07232E'
			}
		}
	},
	plugins: []
}
