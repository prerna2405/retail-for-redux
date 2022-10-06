const { default: produce } = require("immer");
const redux = require("redux");
const reduce = require("immer").produce;

const initialState = {
  name: "Vishwas",
  address: {
    street: "123 sjds",
    city: "Bangalore",
    state: "KA",
  },
};

const STREET_UPDATED = "STATE_UPDATED";
const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = redux.createStore(reducer);
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(updateStre(et("456 abc")));
unsubscribe();
