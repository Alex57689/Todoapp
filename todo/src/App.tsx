import { useEffect, useRef, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";

function App() {
  // allows the input to be taken from the text field via react ref hook
  const inputTask = useRef<HTMLInputElement>(null);

  // task hook
  const [tasks, setTasks] = useState([
    { id: 0, task: "Do the dishes", completed: true },
    { id: 1, task: "Laundry", completed: false },
    { id: 3, task: "Go shopping", completed: false },
    { id: 4, task: "Mow the lawn", completed: false },
  ]);

  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const [filter, setFilter] = useState("all");
  // toggles the state of the task completed from yes to no
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: task.completed === true ? false : true }
          : task
      )
    );
  };

  // handles when the user submits a new task
  const inputSubmit = () => {
    // checks that the input value is current and isnt null
    if (inputTask.current && inputTask.current.value.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          task: inputTask.current.value,
          completed: false,
        },
      ]);
      // resets the input value to an empty string
      inputTask.current.value = "";
    }
  };

  //filters through the array and adds the taks that match the selected filter
  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(
        tasks.filter((task) =>
          filter === "active" ? !task.completed : task.completed
        )
      );
    }
  }, [tasks, filter]);

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => task.completed == false));
    console.log("completed tasks deleted");
  };
  return (
    <Box background={"#ffffff "}>
      <div className="container">
        <div className="titleContainer">
          <Text fontSize={"6xl"} color="teal">
            Todo
          </Text>
        </div>
        <div className="listContainer">
          <Grid>
            <GridItem marginBottom={10}>
              <InputGroup>
                <FaRegCircleCheck color="teal" className="checkbox" />
                <Input
                  variant="unstyled"
                  color="teal"
                  size={"lg"}
                  ref={inputTask}
                  placeholder="New Task"
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      inputSubmit();
                    }
                  }}
                ></Input>
              </InputGroup>
            </GridItem>

            {filteredTasks.map((task) => (
              <GridItem key={task.id}>
                <Button
                  width={"100%"}
                  justifyContent={"left"}
                  paddingLeft={0}
                  size={"md"}
                  variant={"link"}
                  colorScheme="teal"
                  borderBottomWidth={2}
                  borderRadius={0}
                  key={task.id}
                  onClick={() => toggleComplete(task.id)}
                >
                  {" "}
                  {task.completed === true ? (
                    <>
                      <FaCircleCheck className="checkbox" />{" "}
                      <Text className="selected" fontSize={"xl"}>
                        {task.task}
                      </Text>
                    </>
                  ) : (
                    <>
                      <FaRegCircleCheck className="checkbox" />{" "}
                      <Text fontSize={"xl"}>{task.task}</Text>
                    </>
                  )}{" "}
                </Button>
              </GridItem>
            ))}
            <GridItem>
              {" "}
              <Flex
                paddingTop={2}
                alignContent={"space-between"}
                fontSize={"xs"}
                color={"teal"}
              >
                <Button variant={"text"} size={"xs"}>
                  {filteredTasks.length} items left
                </Button>
                <Spacer />
                <Box>
                  <Button
                    onClick={() => setFilter("all")}
                    variant={"text"}
                    size={"xs"}
                  >
                    All
                  </Button>
                  <Button
                    onClick={() => setFilter("active")}
                    variant={"text"}
                    size={"xs"}
                  >
                    Active
                  </Button>
                  <Button
                    onClick={() => setFilter("completed")}
                    variant={"text"}
                    size={"xs"}
                  >
                    Completed
                  </Button>
                </Box>
                <Spacer />
                <Button onClick={clearCompleted} variant={"text"} size={"xs"}>
                  Clear Completed
                </Button>
              </Flex>
            </GridItem>
          </Grid>
          <div className="footer"></div>
        </div>
      </div>
    </Box>
  );
}

export default App;
