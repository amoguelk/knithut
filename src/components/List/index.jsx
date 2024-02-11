import React from 'react';
// Components
import { Text, View } from 'react-native';
import ListItem from 'components/List/ListItem';
// Documentation
import PropTypes from 'prop-types';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Component that displays a list of items that can be deleted.
 * If `checkable` is `true`, then each item will have a checkbox.
 */
const List = ({
  items,
  onItemDelete,
  checkable = false,
  setItemChecked = () => {},
  emptyText = 'This list is empty',
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      {items.length === 0 && <Text style={styles.emptyText}>{emptyText}</Text>}
      {items.length > 0 &&
        items?.map((item, index) => (
          <ListItem
            key={`item_${index}`}
            text={item?.text}
            details={item?.details}
            checkable={checkable}
            checked={checkable && item?.checked}
            setChecked={checkable ? () => setItemChecked(index) : () => {}}
            onDelete={() => onItemDelete(index)}
          />
        ))}
    </View>
  );
};

List.propTypes = {
  /**
   * The items that go in the list, in the form of an array of objects. Required.
   *
   * Each object must include a `text` key, which contains the main text of the item.
   * Optionally, they can also contain a `details` key (with supplementary text) and
   * a `checked` key, which indicates if the item is checked, if the list supports it.
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      details: PropTypes.string,
      checked: PropTypes.bool,
    })
  ).isRequired,
  /**
   * Called when an item is deleted. Required.
   */
  onItemDelete: PropTypes.func.isRequired,
  /**
   * Whether the list supports checking items. Optional. Defaults to `false`.
   */
  checkable: PropTypes.bool,
  /**
   * Called when an item is checked, if the list supports it. Optional.
   */
  setItemChecked: PropTypes.func,
  /**
   * Text displayed when the list is empty. Optional. Defaults to `"This list is empty"`.
   */
  emptyText: PropTypes.string,
};

List.defaultProps = {
  checkable: false,
  setItemChecked: () => {},
  emptyText: 'This list is empty',
};

export default List;
