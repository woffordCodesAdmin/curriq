import "./App.css";
import { useReducer } from "react";


// ------> 1.) Import Hook

const reducer = (state, action) => {
  // {Think of this as a playbook of all actions based on scenario}
  switch (action.type) {
    case "VEGAN":
      return {
        currentCalories: 550,
        currentImage:
          "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/kosfsg4xxwkk3wybp9ha",
        currentPrice: 1.55 ,
      };
    // Think of this as Each Play to be executed
    case "MEATLOVERS":
      return {
        currentCalories: 2200,
        currentImage:
          "https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_auto:low,fl_lossy,dpr_2.0,c_fill,f_auto,h_130/fc8zv02gbazetpst09ne",
        currentPrice: 1.99,
      };
    case "CHEESE":
      return {
        currentCalories: 1200,
        currentImage:
          "https://www.seriouseats.com/thmb/-_mziT2tl0F63I4kfji4S6bE-cA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__10__20181015-state-of-slice-delmar-clay-williams-2de043fa5a0d4475b6c567e4a974b13b.jpg",
        currentPrice: .99,
      };
    default:
      return state;
  }
};
// ----------> 2.) Create Reducer == Playbook

function App() {
  const [state, dispatch] = useReducer(reducer, {
    currentCalories: "0",
    currentImage: "https://www.nycdollarpizza.com/images/background.jpg",
    currentPrice: "0",
    // ---> Enter State Attributes and
  });
  // --------> 3.) Create Dispatch
  return (
    <div className="App">

    <h1> Welcome to Cafe DollaSlice</h1>
    <img src="https://media.timeout.com/images/102827271/image.jpg" className="dSlice"/>

    <div className="screen"> 
    
    <h1 className="txt"> Calories:{state.currentCalories}</h1>
   
     <img src={state.currentImage} className="pizza"/>
     <h1 className="txt"> Price:{state.currentPrice}</h1>
    </div>
      <div className="btnContainer">
        <button
          onClick={() => {
            dispatch({ type: "VEGAN" });
          }}
        >
          Order Vegan
        </button>

        <button
          onClick={() => {
            dispatch({ type: "MEATLOVERS" });
          }}
        >
          Order MeatLovers
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHEESE" });
          }}
        >
          Order Cheese
        </button>
      </div>
    </div>
  );
}

export default App;
