import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SettingsPage({ navigation }) {
  const handlePress = (section) => {
    // TODO: Navigate to respective screens or show modals
    console.log(`${section} pressed`);
  };

  const handleLogout = () => {
    // Navigate back to login screen
    navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        {/* Settings Items */}
        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handlePress("Privacy Policy")}
        >
          <View style={styles.settingContent}>
            <Ionicons name="shield-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.settingItem}
          onPress={() => handlePress("Terms and Conditions")}
        >
          <View style={styles.settingContent}>
            <Ionicons name="document-text-outline" size={24} color="#666" />
            <Text style={styles.settingText}>Terms and Conditions</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        {/* Version Info */}
        <View style={[styles.settingItem, styles.versionItem]}>
          <View style={styles.settingContent}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#666"
            />
            <Text style={styles.settingText}>Version</Text>
          </View>
          <Text style={styles.versionText}>1.0.0</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <View style={styles.settingContent}>
          <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  settingsContainer: {
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  settingContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  versionItem: {
    borderBottomWidth: 0,
  },
  versionText: {
    fontSize: 16,
    color: "#666",
  },
  logoutButton: {
    marginTop: 20,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 12,
    color: "#FF3B30",
    fontWeight: "500",
  },
});
