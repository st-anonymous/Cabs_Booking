import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../../Micro/Typography';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';

export type PromoCardDataTypes = {
  header: string;
  promoCode: string;
  validity: Date;
  terms: Array<string>;
  onClick: () => void;
};

export type PromoCardTypes = {
  expanded?: boolean;
  data: PromoCardDataTypes;
};

export const PromoCard = (props: PromoCardTypes) => {
  const {expanded = false, data} = props;
  const {header, promoCode, validity, terms, onClick} = data;

  return (
    <View>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: '80%',
            justifyContent: 'space-between',
          }}
          onPress={onClick}>
          <Typography text={header} size={'large'} />
          <FontAwesomeIcon
            icon={expanded ? faChevronUp : faChevronDown}
            size={15}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      <View>
        {!expanded && (
          <View>
            <Typography text={terms} size={'small'} />
          </View>
        )}
      </View>
    </View>
  );
};
