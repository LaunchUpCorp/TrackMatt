import { Text, Box } from '@gluestack-ui/themed';
import MintButton from '../components/MintButton';
import BlueLink from '../components/BlueLink';
import Logo from '../components/Logo';

const Landing = () => {
  return (
    <Box
      h='100%'
      w='100%'
      px='$6'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Text fontSize='$2xl'>Welcome to TrackMatt</Text>
      <Logo />
      <Box alignItems='center'>
        <MintButton text='Create Account' />
        <BlueLink text='Sign in' />
      </Box>
    </Box>
  );
};

export default Landing;
