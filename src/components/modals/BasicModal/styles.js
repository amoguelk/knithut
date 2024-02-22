import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    alert: {
      flex: 1,
      justifyContent: 'center',
      margin: 5,
    },
    body: {
      backgroundColor: colors.border,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    backdrop: {
      backgroundColor: '#000',
      opacity: 0.5,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default getStyles;
