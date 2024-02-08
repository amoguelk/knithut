import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { getStyles } from './styles';
import ListItem from './ListItem';

const List = ({
  items,
  checkable = false,
  setItemChecked,
  onItemDelete,
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
            setChecked={() => setItemChecked(index)}
            onDelete={() => onItemDelete(index)}
          />
        ))}
    </View>
  );
};

export default List;
