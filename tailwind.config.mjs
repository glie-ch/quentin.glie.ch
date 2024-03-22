/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			backgroundImage: {
				spots: "repeating-conic-gradient(#FFF0 0 15deg, #FFF5 15deg 30deg)",
				light: "repeating-conic-gradient(#FFF9 0 10deg, #FFF0 10deg 20deg)",
			},
			animation: {
				head: "spin 2s linear infinite",
				zoom: "zoom 0.8s ease-in-out infinite",
				container: "spin 5s linear infinite reverse",
			},
			keyframes: {
				zoom: {
					"0%": { transform: "scale(1)" },
					"50%": { transform: "scale(0.8)" },
					"100%": { transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [],
};
