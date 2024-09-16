import React from 'react'
import SeactionHeading from './SectionsHeading/SeactionHeading';
import Card from '../Card/Card';
import Jeans from '../../img/jeans.png'
import Dress from '../../img/dress.png'
import Shirt from '../../img/shirt.png'
import Tshirt from '../../img/t-shirt.png'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const items = [
    {
        'title': 'Jeans',
        imagePath: Jeans
    }, {
        'title': 'Shirts',
        imagePath: Shirt
    }, {
        'title': 'T-Shirts',
        imagePath: Tshirt
    }, {
        'title': 'Dresses',
        imagePath: Dress
    }]

function NewArrivals() {
    return (
        <>
            <SeactionHeading title={'Novidades'} />
            <Carousel
                responsive={responsive}
                autoPlay={false}
                swipeable={true}
                draggable={false}
                showDots={false}
                infinite={false}
                partialVisible={false}
                itemClass={'react-slider-custom-item'}
                className='px-8'
            >
                {items && items?.map((item, index) => <Card key={item?.title+ index} title={item.title} imagePath={item.imagePath}/>)}
            </Carousel>
        </>
    )
}

export default NewArrivals
