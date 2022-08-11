import css1 from '../img/portImages/audio-visualizer-photo.jpg';
import chair from '../img/portImages/silla.png';
import react1 from '../img/portImages/portfolio.jpg';
import img2 from '../img/portImages/dj-page.png';
import img3 from '../img/portImages/expense-tracker-photo.png';
import img4 from '../img/portImages/medisochow.jpg';
import img5 from '../img/portImages/sedisa.jpg';
import react2 from '../img/portImages/dashboard.jpg';
import delivery from '../img/portImages/delivery.jpg'


const portfolios = [
    {
        id: 1,
        category: 'React Native',
        image: delivery,
        link1: 'https://github.com/zsensors/deliveryapp',
        link2: 'https://drive.google.com/file/d/1OjkR2JMvAcpuHi59FezNCgxpg2UNlduB/view?usp=sharing',
        title: 'Delivery App',
        text: 'Created a delivery app with React Native, Redux, Tailwind and Sanity for Back End user friendly data manipulation (Click on the link for Video Demo of the App)'
    },
    {
        id: 2,
        category: 'React JS',
        image: img3,
        link1: 'https://github.com/zsensors/expense-tracker',
        link2: 'https://github.com/zsensors/expense-tracker',
        title: 'Expense tracker',
        text: 'React.Js User Friendly And Completely Interactive Expense Tracker.'
    },
    {
        id: 3,
        category: 'Websites',
        image: img4,
        link1: 'https://github.com/zsensors/medi-sochow',
        link2: 'https://zsensors.github.io/medi-sochow/',
        title: 'Me-Di Sochow Website',
        text: 'Presonalized Website for displaying Me-Di Sochow´s wide variety of products from Mercado Libre'
    },
    {
        id: 4,
        category: 'Websites',
        image: img2,
        link1: 'https://github.com/zsensors/djpage',
        link2: 'https://zsensors.github.io/djpage/',
        title: 'Amadeus Group Website',
        text: 'Responsive website for DJ , Studio and Speaker rental  '
    },
    {
        id: 5,
        category: 'Websites',
        image: img5,
        link1: 'https://github.com/zsensors/SEDISA',
        link2: 'https://zsensors.github.io/SEDISA/',
        title: 'Corporate Group SEDISA WebPage (Currently in development)',
        text: 'Responsive Website for profetional cleaning company with multiple services like: Gardening, Pest Control, and Window Cleaning '
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://github.com/zsensors/react-portfolio',
        link2: '',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'Electronic Engineering',
        image: chair,
        link2: 'https://www.youtube.com/watch?v=efPopB2nWtg&ab_channel=ALONSORAMIREZDEPABLOSVELEZ',
        title: 'Smart Wheel Chair',
        text: 'Smart Wheelchair With Obstacle Detection And Energy Saving System In Real Time Based On The User s Weight, As Well As A User Interface Implemented On A Touch Screen To Move The Chair In Different Directions.'
    },
    {
        id: 8,
        category: 'React JS',
        image: react2,
        link1: 'https://github.com/zsensors/dashboard',
        link2: 'https://zsensors.github.io/dashboard/',
        title: 'Ecommerce Dashboard',
        text: 'React dashboard with multiple features like: calendar, text editor,multiple different charts to display information, and personalized theme color using SyncFusion elements '
    },
    {
        id: 9,
        category: 'Javascript',
        image: css1,
        link1: 'https://github.com/zsensors/Audio-Visualizer',
        link2: 'https://zsensors.github.io/Audio-Visualizer/',
        title: 'Audio Visualizer',
        text: 'JavaScript Bar Themed Audio Visualizer That Can Visualize Any Mp3 File Of Your Choice.'
    },
]

export default portfolios;