import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, View} from 'react-native';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {Typography} from '../../Components/Micro/Typography';
import {BookingCard} from '../../Components/Macro/BookingCard';
import {designBaseConfig} from '../../Design';
import {Divider} from '../../Components/Micro/Divider';

export const Booking = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: 300,
          }}
          source={require('../../Assets/Images/map.png')}
        />
        <Typography text={'Promotions'} size={'large'} color="black" />
      </View>
      <View
        style={{
          marginTop: -50,
          paddingTop: 20,
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: 'white',
          height: '100%',
        }}>
        <View
          style={{
            padding: 30,
            marginHorizontal: 25,
            borderRadius: 25,
            backgroundColor: designBaseConfig.color.primaryBackground,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: '#50AD33',
                }}
              />
              <View
                style={{
                  marginLeft: 20,
                }}>
                <Typography
                  text={'Sattva Anugrah'}
                  size={'small'}
                  color={designBaseConfig.color.primary}
                />
              </View>
            </View>
            <View>
              <FontAwesomeIcon icon={faClose} />
            </View>
          </View>
          <Divider color={designBaseConfig.color.primary} height={0.5} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 10,
                  backgroundColor: 'red',
                }}
              />
              <View
                style={{
                  marginLeft: 20,
                }}>
                <Typography
                  text={'Kempegowda airport'}
                  size={'small'}
                  color={designBaseConfig.color.primary}
                />
              </View>
            </View>
            <View>
              <FontAwesomeIcon icon={faClose} />
            </View>
          </View>
        </View>
        <BookingCard />
      </View>
    </View>
  );
};
