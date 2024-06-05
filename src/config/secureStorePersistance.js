import * as SecureStore from "expo-secure-store";

export const secureStorePersistence = {
	type: "LOCAL",
	async isAvailable() {
		return true;
	},
	async setItem(key, value) {
		return SecureStore.setItemAsync(key, value);
	},
	async getItem(key) {
		return SecureStore.getItemAsync(key);
	},
	async removeItem(key) {
		return SecureStore.deleteItemAsync(key);
	},
};
