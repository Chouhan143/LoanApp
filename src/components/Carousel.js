import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { fetchSliderImages } from '../Hooks/fetchSliderImages';


const CarouselComponent = () => {
  const FlatlistRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carousel, setCarousel] = useState([]);

  useEffect(() => {
    getSliderImages();
  }, []);

  const getSliderImages = async () => {
    try {
      let url = await fetchSliderImages();
      setCarousel(url);
    } catch (error) {
      console.log('fetchSliderImagesData error >>>>>', error);
    }
  };

  // Display Images
  const renderItem = ({ item, index }) => {
    // console.log(item);
    return (
      <View>
        <Image
          source={{uri:item.slider_img}}
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

  // Render Dot Indicators
  const renderDotIndicators = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: responsiveHeight(1),
        }}>
        {carousel.map((dot, index) => (
          <View
            key={index}
            style={[
              styles.indicatorStyle,
              { backgroundColor: index === activeIndex ? '#24c1db' : '#c3c5d1' },
            ]}></View>
        ))}
      </View>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % carousel.length;
      setActiveIndex(nextIndex);
      FlatlistRef.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, carousel.length]);

  return (
    <View>
      <FlatList
        ref={FlatlistRef}
        data={carousel}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: 'red',
    height: responsiveWidth(2),
    width: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(1.2),
  },
});
