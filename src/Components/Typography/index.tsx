import {Text, TextStyle} from 'react-native';
import {designBaseConfig} from '../../Design';

export type TypographyProps = {
  text: string;
  size: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small' | 'tiny';
  textAlign?: 'left' | 'right' | 'center';
  type?:
    | 'primary'
    | 'primaryBold'
    | 'primaryLight'
    | 'secondary'
    | 'secondaryBold'
    | 'secondaryLight';
  color?: string;
  bgColor?: string;
  styleProps?: TextStyle;
};

export const Typography = (props: TypographyProps) => {
  const {
    text,
    size,
    textAlign = 'center',
    type = 'primary',
    color = designBaseConfig.color.primary,
    bgColor,
    styleProps,
  } = props;

  let styles: TextStyle = {
    color: color,
    backgroundColor: bgColor,
    textAlign: textAlign,
    fontFamily: designBaseConfig.text[type],
  };

  switch (size) {
    case 'extra-large':
      styles = {
        ...styles,
        fontSize: 28,
        lineHeight: 36,
      };
      break;
    case 'large':
      styles = {
        ...styles,
        fontSize: 24,
        lineHeight: 32,
      };
      break;
    case 'medium':
      styles = {
        ...styles,
        fontSize: 20,
        lineHeight: 26,
      };
    case 'small':
      styles = {
        ...styles,
        fontSize: 16,
        lineHeight: 20,
      };
      break;
    case 'extra-small':
      styles = {
        ...styles,
        fontSize: 12,
        lineHeight: 16,
      };
      break;
    case 'tiny':
      styles = {
        ...styles,
        fontSize: 9,
        lineHeight: 11,
      };
      break;
  }

  if (styleProps) {
    styles = {...styles, ...styleProps};
  }

  return (
    <Text style={styles} allowFontScaling={false}>
      {text}
    </Text>
  );
};
