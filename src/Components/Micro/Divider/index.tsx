import {ColorValue, DimensionValue, View} from 'react-native';

export type DividerProps = {
  type?: 'vertical' | 'horizontal';
  height?: DimensionValue;
  width?: DimensionValue;
  color?: ColorValue;
};
export const Divider = (props: DividerProps) => {
  const {type = 'horizontal', height, width, color} = props;
  return (
    <View
      style={{
        margin: 6,
        alignSelf: 'center',
        height: height ? height : type == 'horizontal' ? 1.5 : '80%',
        width: width ? width : type == 'horizontal' ? '90%' : 1.5,
        backgroundColor: color ? color : '#999999',
      }}
    />
  );
};
