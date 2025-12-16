import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { makePayment } from "../../config/api";

export default function PaymentScreen() {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    if (!accountNumber || !amount) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    try {
      const data = await makePayment(accountNumber, Number(amount));
      Alert.alert("Success", data.message);
      setAccountNumber("");
      setAmount("");
    } catch (err: any) {
      Alert.alert("Error", err.response?.data?.message || "Payment failed");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Make Payment</Text>
      <TextInput
        style={styles.input}
        placeholder="Account Number"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="EMI Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="number-pad"
      />
      <Button title="Submit Payment" onPress={handlePayment} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 15 },
});
