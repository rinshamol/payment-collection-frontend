import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useState } from "react";

const API_URL =  process.env.EXPO_PUBLIC_API_URL; 

export default function PaymentHistoryScreen() {
  const [account, setAccount] = useState("");
  const [history, setHistory] = useState<any[]>([]);

  const fetchHistory = () => {
    fetch(`${API_URL}/payments/${account}`)
      .then((res) => res.json())
      .then(setHistory)
      .catch(console.error);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment History</Text>
      <TextInput
        placeholder="Account Number"
        value={account}
        onChangeText={setAccount}
        style={styles.input}
      />
      <Button title="Get History" onPress={fetchHistory} />
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Amount Paid: {item.payment_amount}</Text>
            <Text>Date: {new Date(item.payment_date).toLocaleDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, padding: 10, marginBottom: 12, borderRadius: 6 },
  card: { padding: 12, marginBottom: 10, backgroundColor: "#f2f2f2", borderRadius: 8 },
});
