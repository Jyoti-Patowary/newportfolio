import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const images = [
  {
    img: 'https://picsum.photos/400/200',
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    img: 'https://picsum.photos/400/201',
    title: 'Title 2',
    description: 'Description 2',
  },
  {
    img: 'https://picsum.photos/400/202',
    title: 'Title 3',
    description: 'Description 3',
  },
  {
    img: 'https://picsum.photos/400/203',
    title: 'Title 4',
    description: 'Description 4',
  },
  {
    img: 'https://picsum.photos/400/203',
    title: 'Title 5',
    description: 'Description 4',
  },
  {
    img: 'https://picsum.photos/400/203',
    title: 'Title 6',
    description: 'Description 4',
  },
  {
    img: 'https://picsum.photos/400/203',
    title: 'Title 7',
    description: 'Description 4',
  },
];


function CustomPrevBtn(props) {
  const { onClick } = props;
  return (
    <button type="button" className="slick-prev" onClick={onClick}>
      Previous
    </button>
  );
}

function CustomNextBtn(props) {
  const { onClick } = props;
  return (
    <button type="button"  className="slick-next" onClick={onClick}>
      Next
    </button>
  );
}

const CardCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    prevArrow: <CustomPrevBtn />,
    nextArrow: <CustomNextBtn />,
  };

  return (
    <div className="carousel-container" style={{ maxWidth: '95%' }}>
      <Slider {...settings}>
        {images.map(image => (
          <Card key={image.title} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image={image.img}
              alt={image.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {image.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {image.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
};


export default CardCarousel;

