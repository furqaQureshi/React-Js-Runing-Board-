export const addData = (data) => {
  return {
    type: "adddata",
    payload: data,
  };
};
export const removeData = (data) => {
  return {
    type: "removeuser",
    payload: data,
  };
};
export const addCount = (data) => {
  return {
    type: "addCount",
    payload: data,
  };
};

export const removeCount = (data) => {
  return {
    type: "remove",
    payload: data,
  };
};
