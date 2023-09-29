import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../../Micro/Typography';
import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Button} from '../../Micro/Button';

import {designBaseConfig} from '../../../Design';

export type PromoCardDataTypes = {
  header: string;
  promoCode: string;
  validity: string;
  terms: Array<string>;
  onClick: (promoCode: string) => void;
  onApply: (promoCode: string) => void;
};

export type PromoCardTypes = {
  expanded?: boolean;
  data: PromoCardDataTypes;
};

export const PromoCard = (props: PromoCardTypes) => {
  const {expanded = false, data} = props;
  const {header, promoCode, validity, terms, onClick, onApply} = data;

  useEffect(() => {
    // console.log('Aaaaarha');
  });

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
          padding: 20,
          borderRadius: 10,
          width: '100%',
          backgroundColor: 'white',
        }}>
        <View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => onClick(promoCode)}>
            <Typography text={header} size={'large'} />
            <FontAwesomeIcon
              icon={expanded ? faChevronUp : faChevronDown}
              size={15}
              color={designBaseConfig.color.primary}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#DDD7FC',
            borderRadius: 10,
            padding: 8,
            marginVertical: 10,
            alignSelf: 'flex-start',
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Typography text={'Promo Code'} size={'small'} />
            <View
              style={{
                padding: 2,
                paddingHorizontal: 5,
                marginLeft: 20,
                backgroundColor: 'white',
                borderRadius: 5,
              }}>
              <Typography text={promoCode} size={'small'} />
            </View>
          </View>
        </View>
        <View>
          {!expanded ? (
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <Typography text={`Valid till ${validity}`} size={'small'} />
            </View>
          ) : (
            <View
              style={{
                justifyContent: 'flex-start',
              }}>
              <Typography
                text={`Terms & Conditions`}
                size={'extra-small'}
                textAlign="left"
              />
              {terms.map(term => {
                return (
                  <View
                    key={Math.random()}
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                    }}>
                    <Typography text={'•'} size={'extra-small'} />
                    <Typography
                      text={term}
                      size={'extra-small'}
                      color={'black'}
                      styleProps={{marginHorizontal: 10}}
                    />
                  </View>
                );
              })}
              <Button
                text={'Redeem'}
                size={'medium'}
                onClick={() => onApply(promoCode)}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
