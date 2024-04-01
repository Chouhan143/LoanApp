import React, {useState, useRef, useEffect} from 'react';
import {View, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {responsiveHeight, responsiveWidth} from 'react-native-responsive-dimensions';
import {fetchSliderImages} from '../Hooks/fetchSliderImages';

const CarouselComponent = () => {
  const carouselRef = useRef(null);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getSliderImages();
  }, []);

  const getSliderImages = async () => {
    try {
      let urls = await fetchSliderImages();
      setCarousel(urls);
    } catch (error) {
      console.log('fetchSliderImagesData error >>>>>', error);
    }
  };

  // Render Item for Carousel
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image
          source={{uri: item.slider_img}}
          style={{
            width: responsiveWidth(96),
            height: responsiveHeight(30),
            borderRadius: responsiveWidth(3),
            borderWidth: responsiveWidth(0.1),
          }}
        />
      </View>
    );
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Carousel
        ref={carouselRef}
        data={carousel}
        renderItem={renderItem}
        sliderWidth={responsiveWidth(100)}
        itemWidth={responsiveWidth(96)}
      />
    </View>
  );
};

export default CarouselComponent;
