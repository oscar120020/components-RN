/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Modal, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <Button title="Open Modal" onPress={() => setIsModalOpen(true)} />

      <Modal animationType="slide" visible={isModalOpen} transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,.1)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: '60%',
              backgroundColor: 'white',
              padding: 20,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.5,
              elevation: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: '40%',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>Modal</Text>
            <Text style={{color: 'black'}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              perspiciatis inventore explicabo id iste reprehenderit! Eos autem,
              assumenda minus soluta cum voluptas provident, non iure velit
              ipsam, a voluptate rem?
            </Text>
            <Button title="Close Modal" onPress={() => setIsModalOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};
