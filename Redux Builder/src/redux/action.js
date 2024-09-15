import { ADD, REDUCE } from "../actiontype";

export const handleAdd = (payload) => ({
  type: ADD,
  payload,
});

export const handleReduce = (payload) => ({
  type: REDUCE,
  payload,
});