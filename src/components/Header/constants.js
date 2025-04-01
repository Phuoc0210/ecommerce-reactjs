import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const dataBoxIcon = [
  { name: 'facebook', icon: FaFacebookF, href: '#' },
  { name: 'instagram', icon: FaInstagram, href: '#' },
  { name: 'youtube', icon: FaYoutube, href: '#' },
];

const dataMenu = [
  { content: 'Home', href: '/home' },
  { content: 'Pets', href: '/shop' },
  { content: 'About Us', href: '/about' },
  { content: 'Contracts', href: '/contact' },
];

const benefits = [
  {
    bigTitle: '0',
    smallTitle: {
      line1: 'free',
      line2: 'shipping',
      line3: '500K+',
    },
  },
  {
    bigTitle: '7',
    smallTitle: {
      line1: 'days',
      line2: 'exchange',
      line3: '',
    },
  },
  {
    bigTitle: '5',
    smallTitle: {
      line1: 'years',
      line2: 'quality',
      line3: 'exports',
    },
  },
];

export { dataBoxIcon, dataMenu, benefits };
