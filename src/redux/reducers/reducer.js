const initialState = {
  count: 0,
  user: [
    {
      id: 1,
      name: "Furqan",
      location: "Karachi",
      data: "1/2/2022",
      unit: "32",
      status: "Runing",
      point: 3,
    },
    {
      id: 2,
      name: "Furqan",
      location: "Karachi",
      data: "1/2/2022",
      unit: "32",
      status: "Stoped",
      point: 3,
    },
    {
      id: 3,
      name: "Furqan",
      location: "Karachi",
      data: "1/2/2022",
      unit: "32",
      status: "Runing",
      point: 3,
    },
    {
      id: 4,
      name: "Furqan",
      location: "Karachi",
      data: "1/2/2022",
      unit: "32",
      status: "Runing",
      point: 2,
    },
  ],
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case "adddata":
      return { user: [...state.user, action.payload] };
    case "removeuser":
      const filtered = state.user.filter((pro) => pro.id !== action.payload);
      return {
        ...state,
        user: filtered,
      };
    case "addCount":
      let all = [...state.user];
      let index = all.findIndex((item) => {
        console.log(action.payload);
        return item.id === action.payload;
      });
      all[index].point = all[index].point += 1;
      return {
        ...state,
        user: all,
      };
    case "remove":
      let alll = [...state.user];
      let indexx = alll.findIndex((item) => {
        return item.id === action.payload;
      });

      alll[indexx].point = alll[indexx].point -= 1;
      return {
        ...state,
        user: alll,
      };
    default:
      return { ...state };
  }
};

export default root;
