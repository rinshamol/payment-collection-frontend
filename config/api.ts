import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export const getStatus = async () => {
  const res = await axios.get(`${API_URL}/`);
  return res.data;
};

export const getCustomers = async () => {
  const res = await axios.get(`${API_URL}/customers`);
  return res.data;
};

export const makePayment = async (account_number: string, payment_amount: number) => {
  const res = await axios.post(`${API_URL}/payments`, { account_number, payment_amount });
  return res.data;
};

export const getPaymentHistory = async (account_number: string) => {
  const res = await axios.get(`${API_URL}/payments/${account_number}`);
  return res.data;
};
