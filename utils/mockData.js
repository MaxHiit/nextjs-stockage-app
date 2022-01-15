export const DATA_HOME = [
	{
		id: 1,
		title: 'Placard',
		description:
			'Idéal si vous n’avez que quelques affaires à stocker. Parfait pour quelques cartons ou valises.',
		stockage: '0.5m x 1m x 1m',
		cubic_meter: '0.5m3',
		price: 24,
		src: '/images/home-placard.png',
	},
	{
		id: 2,
		title: 'Cave',
		description:
			'Idéal pour une quinzaine de cartons ou des petits meubles. Parfait pour libérer une pièce !',
		stockage: '1,5m x 1m x 1m',
		cubic_meter: '1.5m3',
		price: 36,
		src: '/images/home-cave.png',
	},
	{
		id: 3,
		title: 'Studio',
		description:
			'Convient pour des meubles de taille moyenne telles qu’une table, des chaises, un réfrigérateur, etc.',
		stockage: '3m x 1m x 1m',
		cubic_meter: '3m3',
		price: 54,
		src: '/images/home-studio.png',
	},
]

export const DATA_PACKAGING = [
	{
		id: 1,
		title: 'Yes, I need help',
		description:
			'Nos déménageurs effectuent les tâches demandées  (emballage, démontage,  protection, remontage...)',
		tags: ['Effortless'],
		src: '/images/carton_ouvert.png',
		need_help: true,
	},
	{
		id: 2,
		title: "NO, I I'll do it myself",
		description:
			'Emballez vos affaires et notre équipe vous retrouve pour vous aider à les charger dans notre camion.',
		tags: ['Do it yourself'],
		src: '/images/carton_ferme.png',
		need_help: false,
	},
]

export const DATA_TRANSPORT = [
	{
		id: 1,
		title: 'J’aimerais que l’on collecte mes affaires chez moi, à l’étage.',
		benefits: [
			'2+ déménageurs',
			'Véhicule adapté',
			'Essence incluse',
			'Stationnement inclus',
			'Mise en stockage',
		],
		price: 92,
		src: '/images/transport_floor.jpg',
	},
	{
		id: 2,
		title: 'J’aimerais que l’on collecte mes affaires au pied de mon immeuble',
		benefits: [
			'1 chauffeur livreur',
			'Véhicule adapté',
			'Essence incluse',
			'Stationnement inclus',
			'Mise en stockage',
		],
		price: 65,
		src: '/images/transport_downstairs.jpg',
	},
	{
		id: 3,
		title: 'Je les dépose moi-même à l’entrepôt',
		description:
			'Vous déposez vos affaires vous-même en stockage. C’est l’offre la plus économique',
		price: 0,
		src: '/images/transport_storage.jpg',
	},
]

export const DATA_INSURANCE = [
	{
		id: 1,
		title: 'Basique',
		description: 'Vos affaires sont assurées à hauteur de 100€/m3',
		price: 0,
		src: '/images/insurance_basique.png',
	},
	{
		id: 2,
		title: 'Standard',
		description: 'Vos affaires sont assurées à hauteur de 1000€.',
		price: 12,
		src: '/images/insurance_standard.png',
	},
	{
		id: 3,
		title: 'Premium',
		description: 'Vos affaires sont assurées à hauteur de 2500€.',
		price: 25,
		src: '/images/insurance_premium.png',
	},
]
