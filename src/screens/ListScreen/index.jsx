import React, { useEffect, useState } from 'react';
// Components
import { View } from 'react-native';
import List from 'components/List';
import Button from 'components/buttons/Button';
import CreateItem from 'screens/ListScreen/CreateItem';
// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// Styling
import { useTheme } from '@react-navigation/native';
import getStyles from './styles';

/**
 * Screen that displays a shopping list
 */
const ListScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Loads items saved in storage when the screen is mounted
  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await AsyncStorage.getItem('shopping_items');
        setItems(savedItems ? JSON.parse(savedItems) : []);
      } catch (error) {
        console.error('🚩 Error loading shopping list items:', error);
      }
    };
    loadItems();
  }, []);

  // Saves items in storage when they are modified
  useEffect(() => {
    const saveItems = async () => {
      try {
        const stringifiedItems = JSON.stringify(items);
        await AsyncStorage.setItem('shopping_items', stringifiedItems);
      } catch (error) {
        console.error('🚩 Error saving shopping list items');
      }
    };
    saveItems();
  }, [items]);

  /**
   * Called when an item is checked or unchecked
   * @param {number} index The index of the item
   */
  const setItemChecked = (index) => {
    const itemsCopy = [...items];
    itemsCopy[index].checked = !itemsCopy[index].checked;
    setItems(itemsCopy);
  };

  /**
   * Called when an item is deleted
   * @param {number} index The index of the item
   */
  const onItemDelete = (index) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  /**
   * Called when the `CreateItem` modal is closed, checking whether
   * the item has to be added or not.
   * @param {string} reason The reason why the modal was closed. Can be `cancel` or `add`
   * @param {string} title The title or main text of the item created
   * @param {string} details The details or supplementary text of the item created
   */
  const handleModalClose = (reason, title, details) => {
    setModalVisible(false);
    if (reason === 'add') {
      setItems((prev) => [
        ...prev,
        {
          checked: false,
          text: title,
          details: details === '' ? null : details,
        },
      ]);
    }
  };

  return (
    <View style={styles.listContainer}>
      <List
        checkable
        items={items}
        setItemChecked={setItemChecked}
        onItemDelete={onItemDelete}
        emptyText='Your shopping list is empty'
      />
      <Button label='Add item' onPress={() => setModalVisible(true)} />
      <CreateItem isVisible={modalVisible} onClose={handleModalClose} />
    </View>
  );
};

export default ListScreen;
