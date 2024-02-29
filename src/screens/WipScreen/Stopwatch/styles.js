import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      margin: 5,
    },
    text: {
      color: colors.text,
      fontSize: 40,
      fontWeight: 'bold',
    },
    iconButton: (size) => ({
      backgroundColor: colors.background,
      borderRadius: 50,
      padding: size / 2,
    }),
    actions: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default getStyles;
