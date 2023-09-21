import { Button } from 'tamagui';

type Props = React.ComponentProps<typeof Button>;

const MainButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button themeInverse size="$6" my="$4" {...props}>
      {children}
    </Button>
  );
};

export default MainButton;
