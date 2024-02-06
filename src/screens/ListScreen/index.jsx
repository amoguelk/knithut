import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";
import List from "@app/components/List";
import Button from "@app/components/buttons/Button";

const ListScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [items, setItems] = useState([
    { id: 1, checked: false, text: "Item 1" },
    { id: 2, checked: false, text: "Item 2", details: "Further details" },
    { id: 3, checked: false, text: "Item 3" },
  ]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const savedItems = await AsyncStorage.getItem("shopping_items");
        setItems(savedItems ? JSON.parse(savedItems) : []);
      } catch (error) {
        console.log("🚩 Error loading shopping list items:", error);
      }
    };
    loadItems();
  }, []);

  useEffect(() => {
    const saveItems = async () => {
      try {
        const stringifiedItems = JSON.stringify(items);
        await AsyncStorage.setItem("shopping_items", stringifiedItems);
      } catch (error) {
        console.log("🚩 Error saving shopping list items");
      }
    };
    saveItems();
  }, [items]);

  const addDummyItem = () => {
    const num = items.length + 1;
    setItems((prev) => [
      ...prev,
      { id: num, checked: false, text: `Item ${num}` },
    ]);
  };

  const setItemChecked = (index) => {
    const itemsCopy = [...items];
    itemsCopy[index].checked = !itemsCopy[index].checked;
    setItems(itemsCopy);
  };

  const onItemDelete = (id) => {
    const itemsCopy = items.filter((item) => item.id != id);
    setItems(itemsCopy);
  };

  return (
    <View style={styles.listContainer}>
      <List
        checkable
        items={items}
        setItemChecked={setItemChecked}
        onItemDelete={onItemDelete}
      />
      <Button label='Add item' onPress={addDummyItem} />
    </View>
  );
};

export default ListScreen;
