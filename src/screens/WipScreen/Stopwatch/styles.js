import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.border,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      margin: 5,
    },
    text: {
      color: colors.text,
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default getStyles;
