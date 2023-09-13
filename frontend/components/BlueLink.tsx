import { Button, ButtonText } from '@gluestack-ui/themed';

type Props = {
  text: string;
};

const BlueLink: React.FC<Props> = ({ text }) => {
  return (
    <Button variant='link'>
      <ButtonText fontSize='$sm' fontWeight='$normal'>{text}</ButtonText>
    </Button>
  );
};
export default BlueLink;
