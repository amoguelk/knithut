import React from 'react';
// Components
import { Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import IconButton from 'components/buttons/IconButton';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import createConfirmAlert from 'components/alerts/ConfirmAlert';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * A single item to be used within a `List` component
 */
const ListItem = ({
  text,
  details = null,
  checkable = false,
  checked = false,
  setChecked = () => {},
  onDelete,
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);
  return (
    <View style={styles.item}>
      {checkable && (
        <Checkbox
          style={styles.checkbox}
          value={checked}
          onValueChange={setChecked}
          color={colors.border}
        />
      )}
      <View>
        <Text style={styles.text}>{text}</Text>
        {details && <Text style={styles.details}>{details}</Text>}
      </View>
      <IconButton
        icon={faTrashCan}
        customStyle={styles.trashIcon}
        size={20}
        color={colors.cardContrast}
        rippleColor={colors.cardContrast}
        onPress={() =>
          createConfirmAlert({
            title: 'Delete item?',
            message: `Delete item "${text}"?`,
            confirmText: 'Delete',
            confirmAction: onDelete,
          })
        }
      />
    </View>
  );
};

ListItem.propTypes = {
  /**
   * The main text of the item. Required.
   */
  text: PropTypes.string.isRequired,
  /**
   * The secondary text of the item. Optional.
   */
  details: PropTypes.string,
  /**
   * Whether the item can or cannot be checked. Optional. Defaults to `false`.
   */
  checkable: PropTypes.bool,
  /**
   * Whether the item is or isn't checked. Optional. Defaults to `false`.
   */
  checked: PropTypes.bool,
  /**
   * Changes the `checked` state of the item. Optional.
   */
  setChecked: PropTypes.func,
  /**
   * Called when the item is deleted. Required.
   */
  onDelete: PropTypes.func.isRequired,
};

ListItem.defaultProps = {
  details: null,
  checkable: false,
  checked: false,
  setChecked: () => {},
};

export default ListItem;
