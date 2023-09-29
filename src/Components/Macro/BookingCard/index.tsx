import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Button} from '../../Micro/Button';
import {Typography} from '../../Micro/Typography';
import {useRecoilValue} from 'recoil';
import {BookingAtom} from '../../../Data/AtomDefinitions';
import {Divider} from '../../Micro/Divider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faGift,
  faMoneyBill,
  faNoteSticky,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {designBaseConfig} from '../../../Design';
import {useNavigation} from '@react-navigation/native';
import {SheetManager} from 'react-native-actions-sheet';
import {useEffect, useState} from 'react';

export const BookingCard = () => {
  const bookingAtom = useRecoilValue(BookingAtom);
  const [time, setTime] = useState('');

  useEffect(() => {
    if (bookingAtom.hour) {
      const suffix = bookingAtom?.hour > 12 ? 'PM' : 'AM';
      const hour = bookingAtom?.hour % 12;
      let minute: string | number = bookingAtom?.minute;
      if (minute == 0) minute = '00';
      setTime(hour + ':' + minute + ' ' + suffix);
    }
  }, [bookingAtom.hour]);

  const navigation = useNavigation();

  const onApplyCodeClicked = () => {
    navigation.navigate('Promotions');
  };

  const onTimeSelectClicked = () => {
    SheetManager.show('BookingDate');
  };

  const onConfirmClick = () => {
    // Do Some Stuff
  };

  return (
    <View
      style={{
        borderRadius: 0,
        width: '90%',
        alignSelf: 'center',
        shadowColor: '#999999',
        elevation: 20,
        paddingTop: 20,
      }}>
      <View
        style={{
          padding: 10,
          borderRadius: 30,
          width: '100%',
          backgroundColor: '#DDDDDD',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <TouchableOpacity
              onPress={onTimeSelectClicked}
              style={styles.actionItems}>
              <FontAwesomeIcon icon={faCalendar} style={styles.icon} />
              <Typography
                text={
                  time
                    ? `${bookingAtom.date} ${(
                        bookingAtom.month as string
                      )?.substring(0, 3)} | ${time}`
                    : 'Choose Time'
                }
                size={time ? 'extra-small' : 'small'}
              />
              <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
            </TouchableOpacity>
            <Divider type="vertical" />
            <TouchableOpacity
              onPress={onApplyCodeClicked}
              style={styles.actionItems}>
              <FontAwesomeIcon icon={faGift} style={styles.icon} />
              <Typography
                text={
                  bookingAtom.promoCode
                    ? (bookingAtom.promoCode as string)
                    : 'Apply Code'
                }
                size={'small'}
              />
              <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <TouchableOpacity style={styles.actionItems}>
              <FontAwesomeIcon icon={faMoneyBill} style={styles.icon} />
              <Typography text={'Online'} size={'small'} />
              <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
            </TouchableOpacity>
            <Divider type="vertical" />
            <TouchableOpacity style={styles.actionItems}>
              <FontAwesomeIcon icon={faNoteSticky} style={styles.icon} />
              <Typography text={'Add Notes'} size={'small'} />
              <FontAwesomeIcon icon={faChevronRight} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Divider />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../../Assets/Images/carLogo.jpeg')}
            style={{
              height: 50,
              width: 50,
            }}
          />
          <View
            style={{
              alignItems: 'flex-start',
            }}>
            <Typography text={'Tata Nexon EV'} size={'medium'} color="black" />
            <Typography text={'4.5km'} size={'extra-small'} />
            {bookingAtom.promoCode && (
              <Typography text={'promo code applied'} size={'extra-small'} />
            )}
          </View>
          <View>
            <Typography
              text={bookingAtom.promoCode ? '₹150.0' : '₹180.0'}
              size={'large'}
            />
            {bookingAtom.promoCode && (
              <Typography
                text={'₹180.0'}
                size={'large'}
                color="grey"
                styleProps={{textDecorationLine: 'line-through'}}
              />
            )}
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Button text={'Confirm'} size={'medium'} onClick={onConfirmClick} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionItems: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 8,
    color: designBaseConfig.color.primary,
  },
});
