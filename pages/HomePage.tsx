import { View, Button, Text } from "react-native";
import useAuth from "../hooks/useAuth";
import demoService from "../services/demoService";
import { useEffect, useState } from "react";
import { Person } from "../constant/user.type";

function HomePage() {
  const [data, setData] = useState<Person>({} as any);
  const { authData, login, logout } = useAuth();

  useEffect(() => {
    async function fetchData() {
      const data = await demoService();
      setData(data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <View>
      <Text>{data.age}</Text>
    </View>
  );
}

export default HomePage;
