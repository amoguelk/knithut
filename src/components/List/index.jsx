import { View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";
import ListItem from "./ListItem";

const List = ({ items, checkable = false, setItemChecked, onItemDelete }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      {items?.map((item, index) => (
        <ListItem
          key={`item_${item?.id}`}
          text={item?.text}
          details={item?.details ? item?.details : null}
          checkable={checkable}
          checked={checkable && item?.checked}
          setChecked={() => setItemChecked(index)}
          onDelete={() => onItemDelete(item?.id)}
        />
      ))}
    </View>
  );
};

export default List;
