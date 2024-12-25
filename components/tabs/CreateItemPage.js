import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { items } from "../../data/items";

export default function CreateItemPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateItem = () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title");
      return;
    }

    // Create new item with auto-generated ID
    const newItem = {
      id: (items.length + 1).toString(),
      title: title.trim(),
      description: description.trim(),
    };

    // Add to temporary items array
    items.push(newItem);

    // Show success message and reset form
    Alert.alert("Success", "Item created successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Create New Item</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter item title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Enter item description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <Button title="Create Item" onPress={handleCreateItem} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: "top",
  },
});
