import portfolio from '../images/portfolio.png'
import apollo from '../images/apollo.jpg'
import tvm from '../images/accounting.jpg'
import cleaning from '../images/cleaning.jpg'
import shopping from '../images/shopping.jpg'
import java from '../images/java.jpg'
import thonk from '../images/thonk.png'

export default [
  {
    image: thonk,
    title: 'Portfolio',
    description: 'Lightweight website built with GatsbyJS and ReactJS. Certain components (like this one) are dynamically generated based on external JSON data for ease of modification.',
    skills: ['JavaScript', 'SASS', 'HTML', 'GatsbyJS', 'ReactJS', 'FontAwesome'],
    github: 'https://github.com/RyanLiu6/portfolio'
  },
  {
    image: thonk,
    title: 'Apollo Bot',
    description: 'Discord and Slack bots made for UBC Local Hack Day 2018. Functionality includes Secret Santa and Restaurant suggestion & curation.',
    skills: ['JavaScript', 'Slack', 'Discord.js', 'Yelp Fusion'],
    github: 'https://github.com/RyanLiu6/ApolloBot'
  },
  {
    image: thonk,
    title: 'TVM Calculator',
    description: 'RESTful API for calculating accounting ratios and value of money. This project arose from my own needs when taking Engineering Economics at UBC. An Electron-React based GUI is currently in development.',
    skills: ['JavaScript', 'REST APIs', 'Express.js', 'Postman'],
    github: 'https://github.com/RyanLiu6/tvm-calculator'
  },
  {
    image: thonk,
    title: 'Cleanify',
    description: 'Atom package for refining code based on user-specified keywords. This project was my first time working with my favourite text editor, Atom, and was extremely helpful in understanding JavaScript.',
    skills: ['JavaScript', 'Atom'],
    github: 'https://github.com/RyanLiu6/Cleanify'
  },
  {
    image: thonk,
    title: 'CheckedOut',
    description: 'Shopping application that centralized shopping catalogues of local stores for ease of access. In order to achieve faster loading times, a custom Caching algorithm was implemented along with custom database operations.',
    skills: ['Python3', 'MongoDB', 'Multithreading', 'Caching'],
    github: 'https://github.com/AYWG/CheckedOut'
  }
]
