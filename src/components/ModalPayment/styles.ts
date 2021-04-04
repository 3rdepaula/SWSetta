import { StyleSheet, Dimensions } from 'react-native'
const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.7)'
  },
  modalView: {
    flex: 0.5,
    width: width - 30,
    margin: 20,
    backgroundColor: 'white',
    paddingVertical: 25,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  containerBtn: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 50
  },
  button: {
    paddingVertical: 20,
    elevation: 2,
    width: 120
  },
  buttonClose: {
    backgroundColor: '#000'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 16
  },
  modalTitle: {
    marginBottom: 15,
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    fontSize: 19,
    textAlign: 'justify'
  }
})

export default styles
