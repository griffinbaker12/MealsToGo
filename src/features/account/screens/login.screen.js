import { useState, useContext } from 'react';
import Spacer from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/typography.component';
import { AuthContext } from '../../../services/auth/auth.context';
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  ErrorContainer,
  Title,
} from '../components/account.styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogin, error } = useContext(AuthContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Login</Title>
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
            autoCapitalize='none'
          />
        </Spacer>
        {error && (
          <Spacer size='large'>
            <ErrorContainer>
              <Text variant='error'>{error}</Text>
            </ErrorContainer>
          </Spacer>
        )}
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
      <Spacer size='large'>
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
export default LoginScreen;
