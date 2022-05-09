import { StyleSheet,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper/* { flexDirection: 'row', height: '50vh'  } */}>

      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0.9, backgroundColor: 'blue' }}></View>
        <View style={{ flex: 0.1, backgroundColor: 'red'}}></View>
      </View>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 0.6, backgroundColor: 'purple' }}></View>
        <View style={{ flex: 0.2, backgroundColor: 'yellow'}}></View>
        <View style={{ flex: 0.2, backgroundColor: 'pink'}}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: '50vh'

  },
});