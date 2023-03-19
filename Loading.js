import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Loading({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container_loading}>
        <Image style={{ width: 100, height: 100 }} source={require('./images/check-circle.gif')}>
        </Image>
      </View>

      <View style={styles.container_title_tree}>
        <Image style={{ width: 308, height: 336 }} source={require('./images/title_tree.png')} />
      </View>

      <View style={styles.container_title}>
        <Image style={{ width: 145, height: 93 }} source={require('./images/title.png')} />
      </View>

      <View style={{top: 300}}>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  container_loading: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200, height: 200,
    left: 102, top: 124
  },

  container_title_tree: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 308, height: 336,
    left: 25, top: 302
  },

  container_title: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 145, height: 93,
    left: 233, top: 532
  }
});
