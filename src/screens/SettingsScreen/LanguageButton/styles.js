import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    title: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
    },
  });

export default getStyles;
