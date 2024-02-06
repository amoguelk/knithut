import { Text, View } from "react-native";
import Checkbox from "expo-checkbox";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { useTheme } from "@react-navigation/native";
import { getStyles } from "./styles";
import IconButton from "@app/components/buttons/IconButton";
import createConfirmAlert from "@app/components/alerts/ConfirmAlert";

const ListItem = ({
  text,
  details = null,
  checkable = false,
  checked = false,
  setChecked,
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
        icon={faTrash}
        customStyle={styles.trashIcon}
        size={20}
        color={colors.cardContrast}
        rippleColor={colors.cardContrast}
        onPress={() =>
          createConfirmAlert({
            title: "Delete item?",
            message: `Delete item "${text}"?`,
            confirmText: "Delete",
            confirmAction: onDelete,
          })
        }
      />
    </View>
  );
};

export default ListItem;
