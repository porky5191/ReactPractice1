import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import HookCounter5 from './component/HookCounter5';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <HookCounter5/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



/* -------------------- To pass props to functional & class component ------------------------
      <Greet name='Porky' heroName='Iron Man'>
        <Button>Action</Button>
      </Greet>
      <Greet name="Diana" heroName='Wonder Woman'/>
      <Greet name='Bruce' heroName='Hulk'/>
      <Greet2 name='Greet2'/>
      <Greet3 name='Greet 3'>
        <p>This is childern props</p>
      </Greet3>
      <Greet3 name='Testing Button'>
        <Button title='Click'>Action</Button>
      </Greet3>

      <Welcome1 name='Porky' heroName='Iron Man'>
        <Button title='Click Me'>Action</Button>
      </Welcome1>
      <Welcome1 name="Diana" heroName='Wonder Woman'/>
      <Welcome1 name='Bruce' heroName='Hulk'/>
*/