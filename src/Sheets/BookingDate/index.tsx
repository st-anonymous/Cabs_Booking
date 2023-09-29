import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {Typography} from '../../Components/Micro/Typography';
import {View} from 'react-native';
import {Button} from '../../Components/Micro/Button';
import DatePicker from 'react-native-date-picker';
import {useEffect, useState} from 'react';
import {Divider} from '../../Components/Micro/Divider';
import {months, days} from '../../Data/DaysMonthsEnum';
import {useRecoilState} from 'recoil';
import {BookingAtom} from '../../Data/AtomDefinitions';
import {designBaseConfig} from '../../Design';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export const BookingDate = () => {
  const [date, setDate] = useState(new Date());
  const [bookingAtom, setBookingAtom] = useRecoilState(BookingAtom);
  const [time, setTime] = useState('');

  useEffect(() => {
    if (date) {
      const suffix = date.getHours() > 12 ? 'PM' : 'AM';
      const hour = date.getHours() % 12;
      let minute: string | number = Math.ceil(date.getMinutes() / 15) * 15;
      if (minute == 0) minute = '00';
      setTime(hour + ':' + minute + ' ' + suffix);
    }
  }, [date]);

  const onSelectTime = () => {
    setBookingAtom(prev => {
      return {
        ...prev,
        date: date.getDate(),
        month: months[date.getMonth()],
        day: days[date.getDay()],
        hour: date.getHours(),
        minute: Math.ceil(date.getMinutes() / 15) * 15,
      };
    });
    SheetManager.hide('BookingDate');
  };

  return (
    <>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <FontAwesomeIcon icon={faArrowLeft} style={{marginHorizontal: 16}} />
          <Typography text={'Pick-up time'} size={'large'} color="black" />
        </View>
      </View>
      <ActionSheet>
        <View style={{height: '90%', justifyContent: 'center'}}>
          <View style={{padding: 16}}>
            <Typography
              text={'Select pickup time'}
              size={'medium'}
              color={'black'}
            />
          </View>
          <View style={{padding: 2}}>
            <Typography
              text={`${days[date.getDay()]}, ${date.getDate()} ${
                months[date.getMonth()]
              }`}
              size={'small'}
            />
          </View>
          <View style={{padding: 2}}>
            <Typography text={time} size={'small'} />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 16,
            }}>
            <DatePicker
              mode={'date'}
              date={date}
              onDateChange={setDate}
              androidVariant={'iosClone'}
              minimumDate={new Date()}
              textColor={designBaseConfig.color.primary}
            />
          </View>
          <Divider />
          <View
            style={{
              alignItems: 'center',
            }}>
            <DatePicker
              mode={'time'}
              date={date}
              onDateChange={setDate}
              minuteInterval={15}
              androidVariant={'iosClone'}
              minimumDate={new Date()}
              textColor={designBaseConfig.color.primary}
            />
          </View>
          <Divider />
          <View style={{padding: 24}}>
            <Button
              text={'Confirm time'}
              size={'medium'}
              onClick={onSelectTime}
            />
          </View>
        </View>
      </ActionSheet>
    </>
  );
};
