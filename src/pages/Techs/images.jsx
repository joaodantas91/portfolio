const images = [
  { src: '/img/techs/css.svg', alt: 'css' },
  { src: '/img/techs/html.svg', alt: 'html' },
  { src: '/img/techs/jquery.png', alt: 'jquery' },
  { src: '/img/techs/js.svg', alt: 'js' },
  { src: '/img/techs/react.svg', alt: 'react' },
  { src: '/img/techs/sass.svg', alt: 'sass' },
];

const imagesWithId = images.map((e, index)=>({
  ...e,
  id: `img-${index}`
}))

console.log(imagesWithId);

export default imagesWithId;