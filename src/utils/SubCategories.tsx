// import Apparelogo from '../assets/Header/Shopicons/applogo.png'
// import volleyball from '../assets/Header/Shopicons/volleyball.png'
// import softball from '../assets/Header/Shopicons/softball.png'
// import baseball from '../assets/Header/Shopicons/baseball.png'
// import wrestling from '../assets/Header/Shopicons/wrestling.png'
// import cheerladder from '../assets/Header/Shopicons/cheerladder.png'
// import Group from '../assets/Header/Shopicons/Group.png'
// import basketball from '../assets/Header/Shopicons/basketball.png'
// import soccer from '../assets/Header/Shopicons/soccer.png'
import Apprel from '../assets/Header/Svg/Apprel'
import Football from '../assets/Header/Svg/Football'
import Basketball from '../assets/Header/Svg/Basketball'
import Cheerlading from '../assets/Header/Svg/Cheerlading'
import Baseball from '../assets/Header/Svg/Baseball'
import Softball from '../assets/Header/Svg/Softball'
import Wrestling from '../assets/Header/Svg/Wrestling'
import Volleyball from '../assets/Header/Svg/Volleyball'
import Soccer from '../assets/Header/Svg/Soccer'


export const shop = [
    {
        id: 1,
        category: "Apparel",
        image: <Apprel />,
        subCategories: [
            { id: 1, title: "Coaching Polos" },
            { id: 2, title: "ESports jersey" },
            { id: 3, title: "Compression" },
            { id: 4, title: "Hoodies" },
            { id: 5, title: "Bags" },
            { id: 6, title: "Hats" }
        ],

    },
    {
        id: 2,
        category: "Football",
        image: <Football />,
        subCategories: [
            { id: 1, title: "Flag football uniforms sublimated" },
            { id: 2, title: "Flag football uniforms pro" },
            { id: 3, title: "Flag football jerseys" },
            { id: 4, title: "Football uniforms" },
            { id: 5, title: "Football jerseys" }
        ],

    },
    {
        id: 3,
        category: "Basketball",
        image: <Basketball />,
        subCategories: [
            { id: 1, title: "Women’s basketball uniforms" },
            { id: 2, title: "Warm up jackets and pants" },
            { id: 3, title: "Basketball uniforms" },
            { id: 4, title: "Basketball jerseys" },
            { id: 5, title: "Shooter shirts" }
        ],

    },
    {
        id: 4,
        category: "Cheerleading",
        image: <Cheerlading />,
        subCategories: [
            { id: 1, title: "Cheerleading uniforms sublimated" },
            { id: 2, title: "Cheerleading uniforms stock" },
            { id: 3, title: "Cheerleading uniforms stock" }
        ],

    },
    {
        id: 5,
        category: "Baseball",
        image: <Baseball />,
        subCategories: [
            { id: 1, title: "Baseball uniforms sublimated" },
            { id: 2, title: "Baseball uniforms pro" },
            { id: 3, title: "Baseball jerseys" }
        ],

    },
    {
        id: 6,
        category: "Softball",
        image: <Softball />,
        subCategories: [
            { id: 1, title: "Softball uniforms" },
            { id: 2, title: "Softball jerseys" }
        ],

    },
    {
        id: 7,
        category: "Wrestling",
        image: <Wrestling />,
        subCategories: [
            { id: 1, title: "Wrestling" }
        ],

    },
    {
        id: 8,
        category: "Volleyball",
        image: <Volleyball />,
        subCategories: [
            { id: 1, title: "Volleyball" }
        ],

    },
    {
        id: 9,
        category: "Soccer",
        image: <Soccer />,
        subCategories: [
            { id: 1, title: "Soccer" }
        ],

    }
];
export const promos = [
    {
        id: 1,
        title: "Basketball",
        image: <Basketball />
    },
    {
        id: 2,
        title: "Football",
        image: <Football />
    },
    {
        id: 3,
        title: "Baseball",
        image: <Baseball />
    },
    {
        id: 4,
        title: "Softball",
        image: <Softball />
    }
]