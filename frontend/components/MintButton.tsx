import { Button, ButtonText } from '@gluestack-ui/themed';

type Props = {
  text: string;
};

const MintButton: React.FC<Props> = ({ text }) => {
  return (
    <Button
      bg='$tertiary300'
      size='xl'
      w='$full'
      sx={{
        ':active': {
          bg: '$tertiary200'
        }
      }}
      px='$8'
      py='$2'
      rounded='$xl'
    >
      <ButtonText textAlign='center' w='$full' color='$black'>
        {text}
      </ButtonText>
    </Button>
  );
};

export default MintButton;
