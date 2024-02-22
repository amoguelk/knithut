import React, { useState } from 'react';
// Components
import { Pressable, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import IconButton from 'components/buttons/IconButton';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ConfirmModal from 'components/modals/ConfirmModal';
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
  onPress = () => {},
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

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
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
        {details && <Text style={styles.details}>{details}</Text>}
      </Pressable>
      <IconButton
        icon={faTrashCan}
        customStyle={styles.trashIcon}
        size={20}
        color={colors.cardContrast}
        rippleColor={colors.cardContrast}
        onPress={() => setDeleteModalVisible(true)}
      />
      <ConfirmModal
        isVisible={deleteModalVisible}
        title='Delete item?'
        message={`Delete item "${text}"?`}
        confirmText='Delete'
        confirmAction={onDelete}
        cancelAction={() => setDeleteModalVisible(false)}
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
  /**
   * Called when the item is pressed. Optional.
   */
  onPress: PropTypes.func,
};

ListItem.defaultProps = {
  details: null,
  checkable: false,
  checked: false,
  setChecked: () => {},
  onPress: () => {},
};

export default ListItem;
