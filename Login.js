import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      
      <TouchableOpacity style={styles.container_vector}
        onPress={() => navigation.pop()}>
        <Image style={{ width: 10, height: 20 }} source={require('./images/vector.png')} />
      </TouchableOpacity>

      <View style={styles.container_title_tree}>
        <Image style={{ width: 308, height: 336 }} source={require('./images/title_tree.png')} />
      </View>

      <View style={styles.container_title}>
        <Image style={{ width: 145, height: 93 }} source={require('./images/title.png')} />
      </View>

      <View style={styles.container_text}>
        <Text>Sign in with : </Text>
      </View>

      <TouchableOpacity style={styles.container_kakako_login}>
        <Image style={{ width: 300, height: 45 }} source={require('./images/kakao_login.png')} />
      </TouchableOpacity>


      <TouchableOpacity style={styles.container_naver_login}>
        <Image style={{ width: 300, height: 45 }} source={require('./images/naver_login.png')} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.container_signIn} onPress={() => navigation.navigate("LoginInput")}>
        <Text style={{ fontSize: 12, color: "#000000" }}>sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.container_signUp} >
        <Text style={{ fontSize: 12, color: "#000000" }}>sign in</Text>
      </TouchableOpacity>

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

  container_vector: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 10, height: 20,
    left: 20, top: 50
  },

  container_title_tree: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 308, height: 336,
    left: 26, top: 157
  },

  container_title: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 145, height: 93,
    left: 234, top: 387
  },

  container_text: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 112, height: 28,
    left: 139, top: 527
  },

  container_kakako_login: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, height: 45,
    left: 47, top: 566
  },

  container_naver_login: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300, height: 45,
    left: 47, top: 621
  },

  container_signIn: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#AED0AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#7F9980", borderWidth: 2, borderRadius: 60,
    width: 150.64,
    height: 45,
    left: 43,
    top: 689
  },

  container_signUp: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#AED0AF',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: "#7F9980", borderWidth: 2, borderRadius: 60,
    width: 150.64,
    height: 45,
    left: 201,
    top: 689
  }
});
