import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFormStorage(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}
export async function saveToStorage(key, data) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch {
    return null;
  }
}
