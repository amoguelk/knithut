import React from 'react';
// Components
import { Text, View } from 'react-native';
import IconButton from 'components/buttons/IconButton';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// Translation
import { useTranslation } from 'react-i18next';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

const RowCounter = ({ row, setRow }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const { t } = useTranslation();

  return (
    <View style={styles.rowCounter}>
      <View>
        <Text style={styles.text}>{t('row')}</Text>
        <View style={styles.rowDisplay}>
          <Text style={[styles.text, styles.rowNumber(row.toString().length)]}>
            {row}
          </Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <IconButton
          size={30}
          color={colors.text}
          icon={faArrowUp}
          customStyle={styles.counterButton}
          onPress={() => setRow(row + 1)}
        />
        <IconButton
          size={30}
          color={colors.text}
          icon={faArrowDown}
          customStyle={styles.counterButton}
          onPress={() => setRow(row > 0 ? row - 1 : row)}
        />
      </View>
    </View>
  );
};

RowCounter.propTypes = {
  /**
   * The current row number. Required.
   */
  row: PropTypes.number.isRequired,
  /**
   * Function to set the value of the current row. Required.
   */
  setRow: PropTypes.func.isRequired,
};

export default RowCounter;
