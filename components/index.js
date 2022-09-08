import { styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Camera} from 'expo-camera';
import { useState, useRef, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image} from 'react-native';


export function CameraComponent () {
  
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [photo, setPhoto] = useState();
    const cameraRef = useRef();
    const [click, setClick] = useState(true);
    const [confirm, setConfirm] = useState(false);

    function handleCam () {
      setClick(false);
      if(confirm === true){
        setConfirm(false);
      }
    }

    function handlePicture () {
      setConfirm(true);
    }

    function cancel () {
      if(click === true) {
        setClick(false)
      } 
      if(confirm === true) {
        setConfirm(false);
      } 
    }

    function accept () {
      setClick(true);
    }
  
    useEffect(() => {
      ( async() => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
      })();
    }, [])
  
    if(hasCameraPermission === undefined) {
      return <Text>Requesting Permission</Text>
    } else if (!hasCameraPermission) {
      return <Text>Permission for camera no granted</Text>
    }

    let takePicture = async () => {
      let options = {
        quality: 1,
        base64: true,
        exif: false
      }
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
      handlePicture();
    }

  return (
    <View style={styles.container}>
      {
        click ? 
          <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image
                  style={styles.camera}
                  source={photo}
                />
            </View>
            <TouchableOpacity style={styles.buttonImage} onPress={handleCam}>
                <Image source={require('../assets/cam.png')} resizeMode={'contain'} style={styles.camera}/>
            </TouchableOpacity>
          </View>
        : 
          <>
            {
              confirm ? 
                <View style={styles.container}>
                  <Image source={photo} style={styles.bgPhoto}/>
                  <View style={styles.containerPhoto}>
                    <TouchableOpacity style={styles.buttonAccept} onPress={accept}>
                      <MaterialIcons name='check-circle' color='white' size={60}/> 
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCancel} onPress={cancel}>
                      <MaterialIcons name='cancel' color='white' size={60}/>
                    </TouchableOpacity>
                  </View>   
                </View>
              :
                <Camera ref={cameraRef} style={styles.container}>
                <View style={styles.containerCamera}>
                  <TouchableOpacity onPress={takePicture} style={styles.buttonCamera}>
                    <Text>Take picture</Text>
                  </TouchableOpacity>
                </View>
              </Camera> 
            }
          </>  
      }  
    </View>
  );
};