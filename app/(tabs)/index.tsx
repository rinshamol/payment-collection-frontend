import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import { getCustomers } from "../../config/api";

interface Customer {
  account_number: string;
  issue_date: string;
  interest_rate: number;
  tenure: number;
  emi_due: number;
}

export default function HomeScreen({ navigation }: any) {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await getCustomers();
      setCustomers(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Loans</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.account_number}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Account: {item.account_number}</Text>
            <Text>Issue Date: {item.issue_date}</Text>
            <Text>Interest Rate: {item.interest_rate}%</Text>
            <Text>Tenure: {item.tenure} months</Text>
            <Text>EMI Due: {item.emi_due}</Text>
          </View>
        )}
      />
      <Button title="Make Payment" onPress={() => navigation.navigate("Payment")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { padding: 15, borderWidth: 1, borderRadius: 10, marginBottom: 10 },
});
