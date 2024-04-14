import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import './styles.css';
import { description, title } from './src/constant';

export default function App() {
  return (
    <View className='bg-white flex-1 justify-center items-center'>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

