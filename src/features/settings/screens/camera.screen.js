import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { Camera, CameraType } from 'expo-camera';
import { AuthContext } from '../../../services/auth/auth.context';

const ProfileCamera = styled(Camera)`
  height: 100%;
  width: 100%;
`;

const CameraButton = styled(IconButton)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 600px;
  left: 50%;
  transform: translateX(-58px);
  border: 2px solid black;
  background-color: lightblue;
`;

// const CameraWrapper = styled(View)`
//   position: absolute;
//   bottom: 20px;
//   border-radius: 50%;
// `;

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);

  const snap = async () => {
    const photo = await cameraRef.current.takePictureAsync();
    AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    navigation.goBack();
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <ProfileCamera
      ref={camera => (cameraRef.current = camera)}
      type={CameraType.front}
    >
      <CameraButton size={35} icon='camera' mode='contained' onPress={snap} />
    </ProfileCamera>
  );
}
