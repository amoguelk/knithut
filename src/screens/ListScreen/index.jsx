import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";
import List from "@app/components/List";
import Button from "@app/components/buttons/Button";
import CreateItem from "./CreateItem";

const ListScreen = () => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const setItemChecked = (index) => {
    const itemsCopy = [...items];
    itemsCopy[index].checked = !itemsCopy[index].checked;
    setItems(itemsCopy);
  };

  const onItemDelete = (index) => {
    const itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };

  const handleModalClose = (reason, title, details) => {
    setModalVisible(false);
    if (reason === "add") {
      setItems((prev) => [
        ...prev,
        {
          checked: false,
          text: title,
          details: details === "" ? null : details,
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
