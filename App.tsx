import { StyleSheet, View } from 'react-native';
import { AppNavigation } from './src/navigation/AppNavigation';

// Para alternar o componente visualizado na aula, comente/descomente as importações abaixo:
// import { UserForm } from './src/components/UserForm';
// import { StatementScreen } from './src/screens/StatementScreen';
// import { AnimatedCard } from './src/components/AnimatedCard';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
      {/* <UserForm /> */}
      {/* <StatementScreen /> */}
      {/* <AnimatedCard /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});