import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20
  },

  listItem: {
    backgroundColor: '#000',
    marginTop: 20,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemDetails: {
    padding: 30,
    backgroundColor: '#000'
  },

  textItem: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },

  loadScreen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20
  },

  textDefault: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 22
  }
})

export default styles
