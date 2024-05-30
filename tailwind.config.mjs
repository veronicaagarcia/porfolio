/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
					background: '#202020',
					primary: '#f9f871', 
					secondary: '#513e4e',
					text:'#d57f6d',
					gray:'#333'
				},
			
		},
	},
	plugins: [],
}
