import { Button } from "@chakra-ui/react";

interface Props {
  onReset: () => void;
}
const Reset = ({ onReset }: Props) => {
  return (
    <Button width={"90%"} onClick={onReset}>
      Reset
    </Button>
  );
};

export default Reset;
