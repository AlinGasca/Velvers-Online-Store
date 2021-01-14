import SHOP_DATA_SECTIONS from "./../../data/shop.data.sections";

const INITIAL_STATE = {
    sections: SHOP_DATA_SECTIONS
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default directoryReducer;