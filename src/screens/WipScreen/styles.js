import { StyleSheet } from 'react-native';

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      flex: 1,
      backgroundColor: colors.primary,
      padding: 20,
    },
    text: {
      color: colors.text,
      fontSize: 14,
    },
    title: {
      fontSize: 20,
    },
    subContainer: {
      minHeight: '33%',
      maxHeight: '33%',
      padding: 5,
    },
    infoContainer: {
      flexDirection: 'row',
    },
    simpleInput: {
      borderBottomColor: colors.border,
      borderBottomWidth: 2,
      marginVertical: 5,
    },
    rowCounter: {
      width: '40%',
      backgroundColor: colors.card,
      marginRight: 10,
      marginVertical: 40,
      flexDirection: 'row',
    },
    patternInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    notesInput: {
      textAlignVertical: 'top',
      backgroundColor: colors.card,
      color: colors.cardContrast,
      fontSize: 20,
      padding: 5,
      margin: 10,
      height: '80%',
    },
  });

export default getStyles;
