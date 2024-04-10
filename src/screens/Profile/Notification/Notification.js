import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {getNotification} from '../../../Hooks/notification';
import {useDispatch, useSelector} from 'react-redux';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Notification = () => {
  const dispatch = useDispatch();
  const [notificationData, setNotificationData] = useState([]);
  const details = useSelector(
    state => state.ReduxStore.localstorageUserDetails,
  );

  useEffect(() => {
    notificationByUserId();
  }, []);

  const notificationByUserId = async () => {
    let payload = {
      user_id: details.user_id,
    };
    let data = await getNotification(payload);
    const currentTime = new Date();
    setNotificationData(
      data.data.map(notification => ({
        ...notification,
        receivedTime: currentTime,
      })),
    );
    // setNotificationData(data.data);
  };

  const calculateTimeElapsed = receivedTime => {
    if (!receivedTime) return 'Now';
    const currentTime = new Date();
    const timeDifference = Math.floor((currentTime - receivedTime) / 1000);
    if (timeDifference < 60) {
      return 'Now';
    } else if (timeDifference < 3600) {
      const minutes = Math.floor(timeDifference / 60);
      return `${minutes} min ago`;
    } else {
      const hours = Math.floor(timeDifference / 3600);
      return `${hours} hr ago`;
    }
  };

  const renderItem = ({item}) => {
    const date = new Date(item.updated_at);
    const formattedDate = date.toLocaleDateString(); // Get only the date portion

    return (
      <View style={styles.notificationBox}>
        <View style={styles.innerBox}>
          <MessageIcon
            name={'android-messages'}
            size={responsiveFontSize(3)}
            color={'#000'}
          />
          <Text
            style={{
              color: '#000',
              paddingRight: responsiveWidth(2),
              fontWeight: '500',
            }}>
            {/* {calculateTimeElapsed(new Date(item.receivedTime))}
             */}
            {formattedDate}
          </Text>
        </View>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{margin: responsiveWidth(5)}}>
        <Text style={styles.notificationText}>Notification</Text>
        <FlatList
          data={notificationData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationText: {
    fontSize: responsiveFontSize(2.5),
    color: '#000',
    fontWeight: '700',
  },
  notificationBox: {
    width: responsiveWidth(90),
    height: responsiveHeight(13),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderRadius: responsiveWidth(3),
    shadowColor: '#000',
    marginVertical: responsiveHeight(1.5),
  },
  innerBox: {
    width: responsiveWidth(90),
    height: responsiveHeight(4),
    borderTopRightRadius: responsiveWidth(3),
    borderTopLeftRadius: responsiveWidth(3),
    shadowColor: '#000',
    backgroundColor: 'gray',
    justifyContent: 'center',
    padding: responsiveWidth(1),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  message: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    padding: responsiveWidth(1.8),
  },
});
