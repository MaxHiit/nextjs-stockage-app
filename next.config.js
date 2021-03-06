module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	compilerOptions: {
		baseUrl: '.',
		paths: {
			'@components/': ['src/components/'],
			'@context/': ['context/'],
			'@utils/': ['utils/'],
			'@config/': ['config/'],
			'@api/': ['api/'],
			'@lib/': ['lib/'],
			'@styles/': ['styles/'],
		},
	},
	include: ['*/.js'],
	exclude: ['node_modules', '.next'],
}
