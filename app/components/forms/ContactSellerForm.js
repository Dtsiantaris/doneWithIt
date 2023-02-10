import React from "react";
import { Alert, Keyboard } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "./index";
import messagesApi from "../../api/messages";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    try {
      const result = await messagesApi.send(message, listing.id);

      if (!result.ok) {
        console.log("Error", result);
        return Alert.alert(
          "Error",
          "Could not send the message to the seller."
        );
      }

      resetForm();
      const content = {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      };
      Notifications.scheduleNotificationAsync({
        content,
        trigger: { seconds: 1 },
      });
    } catch (error) {
      console.log("Local notification error", error);
    }
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <AppFormField
        maxLength={255}
        multiline
        name="message"
        numberOfLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact Seller" />
    </AppForm>
  );
}

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

export default ContactSellerForm;
