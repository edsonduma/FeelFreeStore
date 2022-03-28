// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar 
        translucent
        barStyle='dark-content'
      />
      <Routes />
    </>
  );
}