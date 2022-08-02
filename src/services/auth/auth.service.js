import { signInWithEmailAndPassword } from 'firebase/auth';

export default loginRequest = (email, password) =>
  signInWithEmailAndPassword(email, password);
