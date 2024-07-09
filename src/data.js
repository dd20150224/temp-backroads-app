import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const PAGE_LINKS = [
  {
    id: 1,
    text: 'home',
    url: '#home',
  },
  {
    id: 2,
    text: 'about',
    url: '#about',
  },
  {
    id: 3,
    text: 'services',
    url: '#services',
  },
  {
    id: 4,
    text: 'tours',
    url: '#tours',
  },
]

export const SOCIAL_LINKS = [
  {
    id: 1,
    icon: 'fab fa-facebook',
    url: 'https://www.twitter.com',
  },
  {
    id: 2,
    icon: 'fab fa-twitter',
    url: 'https://www.twitter.com',
  },
  {
    id: 3,
    icon: 'fab fa-squarespace',
    url: 'https://www.twitter.com',
  },
  {
    id: 4,
    icon: 'fab fa-tripadvisor',
    url: 'https://www.twitter.com',
  },
]

export const SERVICES = [
  {
    icon: 'fa-wallet',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'fa-tree',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    icon: 'fa-socks',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const TOURS = [
  {
    id: 1,
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    image: tour1,
    country: 'china',
    date: 'august 26th, 2020',
    durationInDays: 6,
    lowestPrice: 2100,
  },
  {
    id: 2,
    title: 'best of java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    image: tour2,
    country: 'indonesia',
    date: 'october 1st, 2020',
    durationInDays: 11,
    lowestPrice: 1400,
  },
  {
    id: 3,
    title: 'explore hong kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    image: tour3,
    country: 'hong kong',
    date: 'september 15th, 2020',
    durationInDays: 8,
    lowestPrice: 5000,
  },
  {
    id: 4,
    title: 'kenya highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    image: tour4,
    country: 'kenya',
    date: 'december 2nd, 2020',
    durationInDays: 20,
    lowestPrice: 3300,
  },
]
