import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

interface Props {
  tipAmount?: number;
  totalPerPerson?: number;
}
const TipOutput = ({ tipAmount, totalPerPerson }: Props) => {
  return (
    <Box padding={5} color={"white"}>
      <Grid height={"100%"} templateColumns="repeat(2, 1fr)" gap={5}>
        <GridItem colSpan={1}>
          <Text fontSize={"xl"}>Tip Amount:</Text>
          <Text color="#6A9A9F" fontSize={"sm"}>
            / person
          </Text>
        </GridItem>
        <GridItem colSpan={1} justifySelf={"end"}>
          {" "}
          <Text fontSize={"4xl"}>
            {tipAmount !== undefined ? `$${tipAmount.toFixed(2)}` : "$0.00"}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize={"xl"}>Total:</Text>
          <Text color="#6A9A9F" fontSize={"sm"}>
            / person
          </Text>
        </GridItem>
        <GridItem colSpan={1} justifySelf={"end"}>
          <Text fontSize={"4xl"}>
            {totalPerPerson !== undefined
              ? `$${totalPerPerson.toFixed(2)}`
              : "$0.00"}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TipOutput;
