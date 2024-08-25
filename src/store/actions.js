import { TASK_ADDED, TASK_REMOVED } from "./actionType";

export function taskAdded({ id, description, status }) {
  return {
    type: TASK_ADDED,
    payload: {
      id,
      description,
      status,
    },
  };
}

export function taskRemoved(id) {
  return {
    type: TASK_REMOVED,
    payload: {
      id,
    },
  };
}
