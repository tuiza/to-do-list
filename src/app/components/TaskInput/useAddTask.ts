import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function useAddTask() {
    const [task, setTask] = useState({
        id: '',
        name:''
  });

  const addTask = () => {
    setTask( {
      id: uuidv4(),
      name: task.name,
    })
  };
  return { task, addTask };
}
