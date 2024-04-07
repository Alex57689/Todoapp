import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  count: number;
  onClick: () => void;
}

const MyButton = ({ count, onClick }: Props) => {
  return <Button onClick={onClick}>MyButton clicked {count} </Button>;
};

export default MyButton;
