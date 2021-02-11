const images = {
  stack: [
    { src: '/img/techs/css.svg', alt: 'css' },
    { src: '/img/techs/html.svg', alt: 'html' },
    { src: '/img/techs/js.svg', alt: 'js' },
    { src: '/img/techs/jquery.svg', alt: 'jquery' },
    { src: '/img/techs/react.svg', alt: 'react' },
    { src: '/img/techs/sass.svg', alt: 'sass' },
    { src: '/img/techs/bootstrap.svg', alt: 'sass' },
  ],
  techs: [
    { src: '/img/techs/linux.svg', alt: 'linux' },
    { src: '/img/techs/git.svg', alt: 'git' },
    { src: '/img/techs/npm.svg', alt: 'git' },
    { src: '/img/techs/yarn.svg', alt: 'git' },
  ]
};

let imagesWithId = {};
let imgIndex = 0;

for (const key in images) {
  imagesWithId[key] = images[key].map((e)=>{
    let image = {
      ...e,
      id: `img-${imgIndex}`
    }
    imgIndex ++
    return image;
  })
}
export default imagesWithId;