// import { configureStore } from "./store/configureStore"; // only export
import configureStore from "./store/configureStore"; // with default export
import { TASK_ADDED, TASK_REMOVED } from "./store/actionType";
import { completedTaskState, pendingTaskState, taskAdded, taskRemoved } from "./store/task";
import { addToCart } from "./store/cart";

/*
import  store  from "./custom_redux/customStore";
// console.log(store);

store.subscribe(()=>{
  console.log("State Changed");
  
})

store.dispatch(taskAdded({
  id:1,
  description: "Client meeting at 2PM",
  status: "Pending",
}))
store.dispatch(taskAdded({
  id: 2,
    description: "Gym at 7am",
    status: "Pending",
}))
*/

// console.log(store.getState());

const store = configureStore();

// whenever state change we get notify
const unsubscribe = store.subscribe(() => {
  console.log("State changed", store.getState());
});

/*
store.dispatch({
  type: TASK_ADDED,
  payload: {
    id: 1,
    description: "Client meeting at 2PM",
    status: "Pending",
  },
});
store.dispatch({
  type: TASK_ADDED,
  payload: {
    id: 2,
    description: "Gym at 7am",
    status: "Pending",
  },
});
store.dispatch({
  type: TASK_ADDED,
  payload: {
    id: 3,
    description: "Dinner at 9pm",
    status: "Pending",
  },
});

store.dispatch({
  type: TASK_REMOVED,
  payload: {
    id: 2,
  },
});
*/

// console.log(store.getState());

store.dispatch(
  taskAdded({
    id: 1,
    description: "Client meeting at 2PM",
    status: "Pending",
  })
);
unsubscribe();
store.dispatch(
  taskAdded({
    id: 2,
    description: "Gym at 7am",
    status: "Pending",
  })
);
store.dispatch(
  taskAdded({
    id: 3,
    description: "Dinner at 9pm",
    status: "Done",
  })
);
store.dispatch(
  taskAdded({
    id: 4,
    description: "Lunch at 2pm",
    status: "Done",
  })
);

store.dispatch(
  addToCart({
    id: 1,
    name: "Puma Shoes",
    description: "Light weight",
  })
);
store.dispatch(
  addToCart({
    id: 2,
    name: "Puma Sandal",
    description: "Light weight",
  })
);
store.dispatch(
  addToCart({
    id: 3,
    name: "Puma Slipper",
    description: "Light weight",
  })
);

// store.dispatch(taskRemoved(2));

const pendingTask=pendingTaskState(store.getState())
console.log(pendingTask);

const completedTask=completedTaskState(store.getState())
console.log(completedTask);


// console.log(store.getState());

