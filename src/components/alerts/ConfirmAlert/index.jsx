import { Alert } from "react-native";

/**
 * @deprecated
 */
const createConfirmAlert = ({
  title,
  message,
  confirmAction = () => {},
  cancelAction = () => {},
  cancelText = "Cancel",
  confirmText = "OK",
}) => {
  Alert.alert(
    title,
    message,
    [
      { text: cancelText, onPress: cancelAction, style: "cancel" },
      { text: confirmText, onPress: confirmAction },
    ],
    { cancelable: false }
  );
};

export default createConfirmAlert;
