/* eslint-disable react-native/no-inline-styles */
import React, {useMemo, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const {width: windowWidth} = Dimensions.get('window');

export const SlidesScreen = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const isLastSlide = useMemo(() => slideIndex !== items.length - 1, [slideIndex]);
  const {theme: {colors}} = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          //   justifyContent: 'space-around',
          alignItems: 'center',
          padding: 40,
        }}>
        <Image
          source={item.img}
          style={{height: 350, width: 400, resizeMode: 'center'}}
        />
        <Text
          style={{
            ...styles.title,
            alignSelf: 'flex-start',
            color: colors.primary,
          }}>
          {item.title}
        </Text>
        <Text style={{...styles.text, color: colors.text}}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        onSnapToItem={index => setSlideIndex(index)}
      />
      <View
        style={{
          width: windowWidth,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={slideIndex}
          dotColor="#5856d6"
          inactiveDotColor="gray"
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            backgroundColor: '#5856d6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            paddingHorizontal: 20,
            paddingVertical: 8,
            opacity: isLastSlide ? 0.3 : 1,
          }}
          disabled={isLastSlide}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={{color: colors.text, fontSize: 16}}>Entrar</Text>
          <Icon name="chevron-forward-outline" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
