import { useState, useContext } from 'react';
import Spacer from '../../../components/spacer/spacer.component';
import { AuthContext } from '../../../services/auth/auth.context';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from '../components/account.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label='Email'
          value={email}
          onChangeText={u => setEmail(u)}
          textContentType='emailAddress'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            onChangeText={p => setPassword(p)}
            textContentType='password'
            secureTextEntry
            secure
            autoCapitalize='none'
          />
        </Spacer>
        <Spacer size='large'>
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
export default LoginScreen;
