import { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const { onRegister, isLoading, error } = useContext(AuthContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
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
        <Spacer size='large'>
          <AuthInput
            label='Confirm Password'
            value={repeatedPassword}
            onChangeText={r => setRepeatedPassword(r)}
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
          {isLoading ? (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          ) : (
            <AuthButton
              icon='email'
              mode='contained'
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          )}
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
export default RegisterScreen;
