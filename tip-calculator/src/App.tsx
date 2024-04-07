import { useEffect, useState } from "react";
import TipInput from "./components/TipInput";
import TipOutput from "./components/TipOutput";
import Reset from "./components/Reset";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Img,
  VStack,
} from "@chakra-ui/react";
import logo from "./assets/logo.svg";
function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  // resets all useState values to 0 and resets the
  function resetAll() {
    setBill(0);
    setTip(0);
    setPerson(0);
    setTotalBill(0);
    setTotalTip(0);
    console.log("Calculator has been reset!");
    console.log(totalBill);
    console.log(totalTip);
  }
  // Calculates the total tips and bill value
  function calculateTip() {
    if (tip && bill && person) {
      let tipValue = (bill * tip) / 100;
      let tipPerPerson = tipValue / person;
      let tBill = bill + tipValue;

      console.log("Total tip for bill : $" + tipValue);
      console.log("Total tip for each person: $" + tipPerPerson);
      console.log("Total bill: $" + tBill);

      setTotalBill(tBill / person);
      setTotalTip(tipPerPerson);
    }
  }

  // Handle bill value from bill input
  function handleBill(selectedBill) {
    const tmpBill = parseFloat(selectedBill);
    setBill(tmpBill);
  }
  //Handles # of people selected from persons input
  function handleP(selectedP) {
    const tmpP = parseFloat(selectedP);
    setPerson(tmpP);
  }
  // Handles tip selection from tip input
  function handleTip(selectedTip) {
    const tmpTip = parseFloat(selectedTip);
    setTip(tmpTip);
  }

  // detects a change in the tip, person and bill constant and runs calculateTip()
  useEffect(() => {
    calculateTip();
  }, [tip, person, bill]);

  return (
    <Box bgColor={"#C5E4E7"}>
      <Flex
        minW={"1000px"}
        height={"100vh"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Center>
          <VStack>
            <Img src={logo} alt="" mb={10}></Img>
            <Box
              minWidth={"900px"}
              bgColor={"white"}
              padding={10}
              borderRadius={10}
            >
              <Grid height={"100%"} templateColumns="repeat(2, 1fr)" gap={5}>
                <GridItem>
                  <TipInput
                    pChange={handleP}
                    billChange={handleBill}
                    tipChange={handleTip}
                  ></TipInput>
                </GridItem>
                <GridItem bgColor={"#00474B"} borderRadius={10}>
                  <TipOutput
                    tipAmount={totalTip}
                    totalPerPerson={totalBill}
                  ></TipOutput>
                  <Center mt={20} padding={5}>
                    <Reset onReset={resetAll}></Reset>
                  </Center>
                </GridItem>
              </Grid>
            </Box>
          </VStack>
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
