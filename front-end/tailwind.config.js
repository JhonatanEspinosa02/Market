/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.jsx"],
    theme: {
        extend: {
            backgroundImage: {
                'coffee': "url('/src/assets/Coffee-PNG-HD.png')",
                'groceries': "url('/src/assets/forest-fruits-png-vector-11546988735anc55iwlf6-removebg-preview.png')" ,
                'bread': "url('/src/assets/stock-photo-bread-bakery-background-brown-and-white-wheat-grain-loaves-composition-removebg-preview.png')",
                'quaker': "url('/src/assets/00750047802503L-removebg-preview.png')",
                'salmon': "url('/src/assets/Salmon-Glaseado-con-Salsa-de-Naranja-removebg-preview.png')",
                'serrano': "url('/src/assets/alimento-nutricienta-jamn-serrano-removebg-preview.png')"
            },
            backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
            },
            backgroundRepeat: {
              'no-repeat': 'no-repeat',
            },
            backgroundPosition: {
              'right': 'right center',
              'left': 'left center' 
            }
        },
        theme: {
            screens: {
                'sm': '640px',
                // => @media (min-width: 640px) { ... }

                'md': '768px',
                // => @media (min-width: 768px) { ... }

                'lg': '1024px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1280px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1536px',
                // => @media (min-width: 1536px) { ... }
            }
        }
    },
    plugins: [],
}