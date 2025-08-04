import { StyleSheet } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b34af',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1,
    backgroundColor: '#cc1212',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 700
  }
});
