export const PRODUCT_CATEGORIES = [
    {
        label: 'Street Bikes',
        value: 'street_bikes' as const,
        featured: [
            {
                name: "Gray Bike ",
                href: '/grey bike-1.jpg',
                imageSrc: '/grey bike-1.jpg'
            },
            {
                name: "New Arrivals ",
                href: '/',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: "Bestsellers ",
                href: '/',
                imageSrc: '/nav/ui-kits/purple.jpg'
            }
        ]
    },
    {
        label: 'Mountain Bikes',
        value: 'mountain_bikes' as const,
        featured: [
            {
                name: "Favourite Icon Picks ",
                href: '/',
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: "New Arrivals ",
                href: '/',
                imageSrc: '/nav/icons/new.jpg'
            },
            {
                name: "Bestselling Icons ",
                href: '/',
                imageSrc: '/nav/icons/bestsellers.jpg'
            }
        ]
    }
]