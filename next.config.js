module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	compilerOptions: {
		baseUrl: '.',
		paths: {
			'@components/': ['components/'],
			'@config/': ['config/'],
			'@api/': ['api/'],
			'@lib/': ['lib/'],
			'@styles/': ['styles/'],
		},
	},
	include: ['*/.js'],
	exclude: ['node_modules', '.next'],
}
