import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Typography} from '../../Components/Micro/Typography';
import {promoCardData} from '../../Data/PromoCardData';
import {PromoCard} from '../../Components/Macro/PromoCard';
import {ScrollView} from 'react-native-actions-sheet';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useRecoilState} from 'recoil';
import {BookingAtom} from '../../Data/AtomDefinitions';
import {useNavigation} from '@react-navigation/native';

export const Promotions = () => {
  const [expanded, setExpanded] = useState<any>();
  const [bookingAtom, setBookingAtom] = useRecoilState(BookingAtom);

  const navigation = useNavigation();

  useEffect(() => {
    const initExpanded: any = {};
    promoCardData.map(item => {
      const promoCode = item.promoCode;
      initExpanded[promoCode] = false;
    });
    setExpanded(initExpanded);
  }, []);

  const onClick = (val: string) => {
    promoCardData.map(item => {
      const promoCode = item.promoCode;
      if (val === promoCode) {
        setExpanded((prev: any) => {
          return {
            ...prev,
            [promoCode]: !expanded[promoCode],
          };
        });
      } else {
        setExpanded((prev: any) => {
          return {
            ...prev,
            [promoCode]: false,
          };
        });
      }
    });
  };

  const onApply = (val: string) => {
    setBookingAtom(prev => {
      return {
        ...prev,
        promoCode: val,
      };
    });
    navigation.navigate('Booking');
  };

  const onBackPress = () => {
    navigation.navigate('Booking');
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <TouchableOpacity onPress={onBackPress}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{marginHorizontal: 16}}
            size={20}
          />
        </TouchableOpacity>
        <Typography text={'Promotions'} size={'large'} color="black" />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 90}}>
        {promoCardData.map(item => {
          return (
            <PromoCard
              key={item.promoCode}
              data={{
                header: item.header,
                promoCode: item.promoCode,
                validity: item.validity,
                terms: item.terms,
                onClick: onClick,
                onApply: onApply,
              }}
              expanded={expanded?.[item.promoCode]}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
