import {ReactNode} from 'react';
import {View, ViewStyle} from 'react-native';

import {designBaseConfig} from '../../Design';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Typography} from '../Typography';

export type ButtonProps = {
  text: string;
  size: 'large' | 'medium' | 'small' | 'extra-small';
  color?: string;
  bgColor?: string;
  onClick: () => void;
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
    startIcon,
    disabled,
  } = props;

  let styles: ViewStyle = {borderRadius: 36};
  switch (size) {
    case 'extra-small':
      styles = {...styles, height: 30};
      break;
    case 'small':
      styles = {...styles, height: 36, width: '50%'};
      break;
    case 'medium':
      styles = {...styles, height: 48};
      break;
    case 'large':
      styles = {...styles, height: 56};
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
