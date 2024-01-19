import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisibility}
        onRequestClose={() => {
          setModalVisibility(!modalVisibility);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable onPress={() => setModalVisibility(!modalVisibility)}>
              <Text style={styles.buttonClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisibility(true)}>
        <Text>Show modal message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    height: 'auto',
    width: '90%'
  },
  buttonClose: {
    fontWeight: 'bold',
    margin: 10
  },
  modalText: {
    margin: 10
  },
});
