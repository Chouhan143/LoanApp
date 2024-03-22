import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ScrollView} from 'react-native-virtualized-view';
import styles from './styles';
import {StackNavigationPropList} from '../../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addLocalStorageUserDetails} from '../../redux/Slice';
import {useDispatch} from 'react-redux';
import {fetchSliderImages} from '../../Hooks/fetchSliderImages';

type NavigationProps = StackNavigationProp<StackNavigationPropList>;
type LocalStorageDetailsProps = {
  email: string;
  role: string;
  status: string;
  user_id: number;
  user_name: string;
  varified: number;
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const [details, setDetails] = useState<LocalStorageDetailsProps | null>();
  const [loading, setLoading] = useState(false);
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
    AsyncStorage.setItem('loginStatus', JSON.stringify(true));
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    BackHandler.addEventListener('hardwareBackPress', backHandler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backHandler);
    };
  }, []);

  const getUserDetails = async () => {
    let details: LocalStorageDetailsProps | null = await AsyncStorage.getItem(
      'loginUserDetails',
    ).then((data: string | null) => (data ? JSON.parse(data) : null));
    setDetails(details);
    dispatch(addLocalStorageUserDetails(details));
    // console.log('user details from local storage>>>>>', details);
  };

  // let url = fetchSliderImages()

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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.navigate('userProfile')}
              style={styles.userImg}>
              <Font6
                name={'circle-user'}
                size={responsiveFontSize(4.5)}
                color={COLORS.white}
              />
            </TouchableOpacity>

            <Text
              style={{
                // alignSelf:'flex-start',
                textAlign: 'center',
                position: 'absolute',
                left: 60,
                fontSize: responsiveFontSize(2.8),
                color: 'black',
                fontWeight: '700',
              }}>
              {details?.user_name}
            </Text>

            <MenuIcon
              name={'menu'}
              size={responsiveFontSize(4)}
              color={COLORS.black}
            />
          </View>
          {/* Carosel */}
          <View style={{width: responsiveWidth(96), alignSelf: 'center'}}>
            <Carousel />
          </View>
          {/* Loan Produt */}
          <View style={{backgroundColor: 'white', alignItems: 'center'}}>
            <Text style={styles.loanProductText}>Loan Products</Text>
            <FlatList
              data={LoanList}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('loanFormScreen')}
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
  );
};

export default HomeScreen;
