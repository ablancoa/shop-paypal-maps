import camisetaAdidasRealMadrid from './assets/images/camiseta-adidas-real-madrid.jpg';
import jarraGrandeCerveza from './assets/images/jarra-grande-cerveza.jpg';
import pinRealMadrid from './assets/images/pin-real-madrid.jpg';
import sticker1 from './assets/images/sticker.jpg';
import sticker2 from './assets/images/sticker2.png';
import sudadera from './assets/images/sudadera.jpg';


export const productsLocal = [
  {
    'id': '1',
    'image': camisetaAdidasRealMadrid,
    'title': 'Camiseta',
    'price': 25,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    'id': '3',
    'image': jarraGrandeCerveza,
    'title': 'Jarra',
    'price': 10,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    'id': '4',
    'image': pinRealMadrid,
    'title': 'Pin',
    'price': 4,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    'id': '5',
    'image': sticker1,
    'title': 'Stickers',
    'price': 2,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    'id': '6',
    'image': sticker2,
    'title': 'Stickers',
    'price': 2,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    'id': '7',
    'image': sudadera,
    'title': 'Hoodie',
    'price': 35,
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

const initialState = {
  cart: [],
};

export default initialState;

