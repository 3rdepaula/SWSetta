import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30
  },
  text: {
    color: '#fff',
    fontSize: 22
  },
  imgBackground: {
    flex: 1,
    resizeMode: 'cover'
  }
})

export default styles
