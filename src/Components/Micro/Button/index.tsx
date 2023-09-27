import {ReactNode} from 'react';
import {DimensionValue, View, ViewStyle} from 'react-native';

import {designBaseConfig} from '../../../Design';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Typography} from '../Typography';

export type ButtonProps = {
  text: string;
  size: 'large' | 'medium' | 'small' | 'extra-small';
  color?: string;
  bgColor?: string;
  onClick: () => void;
  width?: DimensionValue;
  startIcon?: ReactNode;
  disabled?: false;
};

export const Button = (props: ButtonProps) => {
  const {
    text,
    size,
    color = 'white',
    bgColor = designBaseConfig.color.primary,
    onClick,
    width,
    startIcon,
    disabled,
  } = props;

  let styles: ViewStyle = {borderRadius: 36};
  switch (size) {
    case 'extra-small':
      styles = {...styles, height: 30, width: width ? width : '25%'};
      break;
    case 'small':
      styles = {...styles, height: 36, width: width ? width : '35%'};
      break;
    case 'medium':
      styles = {...styles, height: 48, width: width ? width : '50%'};
      break;
    case 'large':
      styles = {...styles, height: 56, width: width ? width : '70%'};
      break;
  }
  styles = {
    ...styles,
    backgroundColor: bgColor,
    alignItems: 'center',
    justifyContent: startIcon ? 'space-around' : 'center',
  };

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        ...styles,
        alignSelf: 'center',
      }}>
      <Typography size={size} color={color} text={text} />
    </TouchableOpacity>
  );
};
