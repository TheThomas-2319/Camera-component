import { StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E'
  },
  containerCamera: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonCamera: {
    backgroundColor: 'white',
    width: '50%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 10,
  },
  camera: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  buttonAccept: {
    backgroundColor: 'transparent', 
    marginBottom: 20, 
    marginRight: 50
  },
  buttonCancel: {
    backgroundColor: 'transparent', 
    marginBottom: 20, 
    marginLeft: 50
  },
  buttonImage: {
    backgroundColor: 'transparent', 
    width: '80%', 
    height: '15%'
  },
  containerImage: {
    backgroundColor: 'transparent', 
    width: '80%', 
    height: '50%', 
    borderRadius: 20, 
    marginBottom: 30, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  containerPhoto: {
    flexDirection: 'row', 
    alignItems: 'flex-end', 
    justifyContent: 'center', 
    width: '100%', 
    height: '100%'
  },
  bgPhoto: {
    width: '100%', 
    height: '100%', 
    zIndex: 0, 
    position: 'absolute'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})