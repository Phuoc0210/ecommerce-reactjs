import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

const dataBoxIcon = [
  { name: 'facebook', icon: FaFacebookF, href: '#' },
  { name: 'instagram', icon: FaInstagram, href: '#' },
  { name: 'youtube', icon: FaYoutube, href: '#' },
];

const dataMenu = [
  { content: 'Home', href: '#' },
  { content: 'Pets', href: '#' },
  { content: 'About Us', href: '#' },
  { content: 'Contracts', href: '#' },
];

const benefits = [
  {
    bigTitle: '0',
    smallTitle: {
      line1: 'free',
      line2: 'shipping for',
      line3: 'orders from 500k',
    },
  },
  {
    bigTitle: '3',
    smallTitle: {
      line1: 'days',
      line2: '1-to-1 exchange',
      line3: 'if defective',
    },
  },
  {
    bigTitle: '22',
    smallTitle: {
      line1: 'years',
      line2: 'quality',
      line3: 'exports',
    },
  },
];

export { dataBoxIcon, dataMenu, benefits };
