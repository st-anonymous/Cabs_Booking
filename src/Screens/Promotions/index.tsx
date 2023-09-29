import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Typography} from '../../Components/Micro/Typography';

import {promoCardData} from '../../Data/PromoCardData';
import {PromoCard} from '../../Components/Macro/PromoCard';
import {ScrollView} from 'react-native-actions-sheet';
import {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Promotions = () => {
  const [expanded, setExpanded] = useState<any>();

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
    console.log(val);
  };

  const onBackPress = () => {};

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 16,
        }}>
        <TouchableOpacity onPress={onBackPress}>
          <FontAwesomeIcon icon={faArrowLeft} style={{marginHorizontal: 16}} />
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
