import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";

interface Props {
  billChange: (bill: string) => void;
  pChange: (person: string) => void;
  tipChange: (tip: number) => void;
}
const TipInput = ({ billChange, tipChange, pChange }: Props) => {
  const tips = [5, 10, 15, 25, 50];
  const [selectedButton, setSelectedButton] = useState(-1);
  return (
    <Box>
      <Box>
        <Text mb={3}>Bill</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <FaDollarSign />
          </InputLeftElement>
          <Input
            mb={5}
            placeholder="Bill"
            onChange={(event) => billChange(event.target.value)}
          />
        </InputGroup>
      </Box>
      <Grid
        templateRows={"repeat(2, 1fr)"}
        templateColumns={"repeat(3, 1fr)"}
        gap={10}
      >
        {tips.map((tips) => (
          <GridItem key={tips}>
            <Button
              _hover={{ bgColor: "#A1E7DF", color: "#00484B" }}
              width={"100%"}
              color={"white"}
              bgColor={selectedButton === tips ? "#00474B" : "#00484B"}
              onClick={() => {
                tipChange(tips);
                setSelectedButton(tips);
              }}
            >
              {tips}%
            </Button>
          </GridItem>
        ))}
      </Grid>
      <Text mt={5}>Number of People</Text>

      <Input
        mt={3}
        placeholder="# Persons"
        onChange={(event) => pChange(event.target.value)}
      />
    </Box>
  );
};

export default TipInput;
