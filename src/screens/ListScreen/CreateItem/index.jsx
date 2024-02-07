import Button from "@app/components/buttons/Button";
import { useTheme } from "@react-navigation/native";
import { Modal, Platform, View, Text, TextInput } from "react-native";
import { getStyles } from "./style";
import { useState } from "react";

const CreateItem = ({ isVisible, onClose }) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  handleClose = (reason) => {
    onClose(reason, title, details);
    setTitle("");
    setDetails("");
  };

  return (
    <Modal animationType='fade' visible={isVisible} transparent>
      <View style={styles.backdrop} />
      <View style={styles.alert}>
        <View style={styles.body}>
          <Text style={styles.title}>Add an item</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder='Golden yarn of Ariadne'
              onChangeText={(text) => setTitle(text)}
              defaultValue={title}
              maxLength={50}
              placeholderTextColor={colors.cardMidContrast}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Make sure it is several yards long, that labyrinth is quite big'
              onChangeText={(text) => setDetails(text)}
              defaultValue={details}
              multiline
              maxLength={150}
              placeholderTextColor={colors.cardMidContrast}
            />
          </View>
          <View style={styles.actions}>
            <Button
              label='Cancel'
              onPress={() => handleClose("cancel")}
              containerStyle={styles.actionButton}
            />
            <Button
              label='Add'
              onPress={() => handleClose("add")}
              containerStyle={styles.actionButton}
              disabled={title === ""}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CreateItem;
