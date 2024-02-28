import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      flex: 1,
      backgroundColor: colors.border,
      padding: 20,
    },
    sectionTitle: {
      color: colors.text,
      fontSize: 20,
    },
  });

export default getStyles;
