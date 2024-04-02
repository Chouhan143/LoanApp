import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ActivityIndicator,
  Image,
  RefreshControl,
  DevSettings,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {COLORS} from '../../themes/COLORS';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MenuIcon from 'react-native-vector-icons/Entypo';
import Font6 from 'react-native-vector-icons/FontAwesome6';
import Carousel from '../../components/Carousel';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import styles from './styles';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addLocalStorageUserDetails} from '../../redux/Slice';
import {useDispatch} from 'react-redux';
import {fetchSliderImages} from '../../Hooks/fetchSliderImages';
import Toast from 'react-native-toast-message';
import {fetchUserDetails} from '../../Hooks/fetchUserDetails';
import FastImage from 'react-native-fast-image';

type NavigationProps = StackNavigationProp<StackNavigationPropList>;
type LocalStorageDetailsProps = {
  email: string;
  role: string;
  status: string;
  user_id: number;
  user_name: string;
  is_verify: number;
  img?: string;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [details, setDetails] = useState<LocalStorageDetailsProps | null>();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [carousel, setCarousel] = useState([]);
  const dispatch = useDispatch();

  const LoanList = [
    {
      id: 1,
      icon: 'cast-for-education',
      Loan_Category: 'Education Loan',
    },
    {
      id: 2,
      icon: 'person',
      Loan_Category: 'Personal Loan',
    },
    {
      id: 3,
      icon: 'store-mall-directory',
      Loan_Category: ' MSME Loan',
    },
    {
      id: 4,
      icon: 'home',
      Loan_Category: 'Home Loan',
    },
    {
      id: 5,
      icon: 'business',
      Loan_Category: 'Business Loan',
    },
    {
      id: 6,
      icon: 'attach-money',
      Loan_Category: 'Project Loan',
    },
    {
      id: 7,
      icon: 'assured-workload',
      Loan_Category: 'Working Capital Loan',
    },
    {
      id: 8,
      icon: 'currency-exchange',
      Loan_Category: 'Loan Against Property',
    },
    {
      id: 9,
      icon: 'add-card',
      Loan_Category: 'CV-CE Loan',
    },
    {
      id: 10,
      icon: 'directions-car-filled',
      Loan_Category: 'Car Loan',
    },
    {
      id: 11,
      icon: 'fiber-smart-record',
      Loan_Category: 'Gold Loan',
    },
  ];

  useEffect(() => {
    setLoading(true);
    getUserDetails();
    getSliderImages();
    AsyncStorage.setItem('loginStatus', JSON.stringify(true));
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    };
  }, []);

  const getUserDetails = async () => {
    try {
      let details: LocalStorageDetailsProps | null = await AsyncStorage.getItem(
        'loginUserDetails',
      ).then((data: string | null) => (data ? JSON.parse(data) : null));

      if (details) {
        dispatch(addLocalStorageUserDetails(details));

        let payload = {
          user_id: details?.user_id,
        };
        const data = await fetchUserDetails(payload);
        setLoading(false);
        setDetails(data);
        // console.log('user data >>>>>', data);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error appropriately, e.g., show error message to the user
    }
  };

  const backHandler = () => {
    if (navigation.isFocused()) {
      Alert.alert('Exit App', 'do you want to exit app ?', [
        {
          text: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
          // onPress: () => navigation.goBack(),
        },
      ]);
      return true;
    } else {
      return false;
    }
  };

  const handleLoanCategoryClick = () => {
    // console.log('user details >>>>',details?.is_verify);
    if (details?.is_verify == 0) {
      Toast.show({
        type: 'error',
        text1: 'Verify Email',
        text2: 'Please verify your email to apply for loan',
        text1Style: {
          fontSize: responsiveFontSize(2),
          fontWeight: '700',
          color: 'red',
        },
        text2Style: {
          fontSize: responsiveFontSize(1.8),
          fontWeight: '500',
          color: 'black',
        },
      });
      navigation.navigate('emailVerification', {screenName: ''});
    } else if (details?.is_verify == 1) {
      navigation.navigate('loanFormScreen');
    }
    // navigation.navigate('loanFormScreen');
  };

  const onRefresh = () => {
    // setLoading(true);
    setRefreshing(true);
    getUserDetails();
    getSliderImages();
    setTimeout(() => {
      // setLoading(false);
      setRefreshing(false);
    }, 400);
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
  const getSliderImages = async () => {
    try {
      let urls = await fetchSliderImages();
      setCarousel(urls);
      setLoading(false);
    } catch (error) {
      console.log('fetchSliderImagesData error >>>>>', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        {loading ? (
          <View
            style={[
              styles.container,
              {alignItems: 'center', justifyContent: 'center'},
            ]}>
            <ActivityIndicator size={'large'} color={COLORS.Primary} />
          </View>
        ) : (
          <View>
            {/* header container */}
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => navigation.navigate('userProfile')}
                style={styles.userImg}>
                {details?.img ? (
                  <FastImage source={{uri: details?.img}} style={styles.userImg} />
                ) : (
                  <FastImage
                    source={require('../../assets/profile.png')}
                    style={styles.userImg}
                  />
                )}
              </TouchableOpacity>

              <Text style={styles.userName}>{details?.name}</Text>
            </View>

            {/* Carosel */}
            <View
              style={{
                justifyContent: 'center',
                height: responsiveScreenHeight(30),
                alignItems: 'center',
              }}>
              <Carousel
                data={carousel}
                renderItem={renderItem}
                sliderWidth={responsiveWidth(100)}
                itemWidth={responsiveWidth(96)}
              />
            </View>

            {/* Loan Product */}
            <View style={{backgroundColor: 'white', alignItems: 'center'}}>
              <Text style={styles.loanProductText}>Loan Products</Text>
              <FlatList
                data={LoanList}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      onPress={handleLoanCategoryClick}
                      style={styles.itemContainer}>
                      <MaterialIcons
                        name={`${item.icon}`}
                        size={30}
                        color={COLORS.Primary}
                      />
                      <Text style={styles.loanCategoryText}>
                        {item.Loan_Category}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                numColumns={3}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
