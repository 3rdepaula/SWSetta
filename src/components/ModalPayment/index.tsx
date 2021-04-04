import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, View, Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { width } = Dimensions.get('screen')

function ModalPayment (): JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(true)

  const verifyPayment = async (value: string): Promise<void> => {
    await AsyncStorage.setItem('@keyValuePayment', value)
    setModalVisible(false)
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='fade'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Atenção</Text>
            <Text style={styles.modalText}>Para você continuar tendo acesso ao lado negro da força, assine nosso Plus!</Text>
            <View style={styles.containerBtn}>
              <RectButton
                style={[styles.button, styles.buttonClose]}
                onPress={async () => await verifyPayment('Pagar')}
              >
                <Text style={styles.textStyle}>Pagar</Text>
              </RectButton>
              <RectButton
                style={[styles.button, styles.buttonClose]}
                onPress={async () => await verifyPayment('Mais tarde')}
              >
                <Text style={styles.textStyle}>Mais tarde</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

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

export default ModalPayment
