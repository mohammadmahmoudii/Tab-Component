import { useState } from "react";
import "./App.css";
const tabData = [
  {
    id: 1,
    title: "ITEM 1",
    content: "Authorize the user data ✅",
  },
  {
    id: 2,
    title: "ITEM 2",
    content: "Redirect user to cart page 🛒",
  },
  {
    id: 3,
    title: "ITEM 3",
    content: "Create new payment for the user 💰",
  },
];

function App() {
  const [tabActive, setTabActive] = useState(1);
  const [user, setUser] = useState({ name: "mohammad" });
  const [show,setShow]=useState(true);
  const [count,setCount]=useState(0);
  // const tabActive = 1;

  function handelActiveTab(id) {
    setTabActive(id);
    setUser({ name: "Ali", id: id });
    console.log({ user });
    // setCount(count+1)
    // setCount(count+1) // just Add one  becuse ausync
    //uppdatin usestate with caal back function , we use when data dependent previus state 
    setCount((prevState)=>prevState+1);
    setCount((prevState)=>prevState+1);
  }

  function handelShow()
  {
    setShow((show)=>!show);
  }

  return (
    <>
    <div className="btnC">
    <button 
    className="btn"
    onClick={handelShow}
    >
      {show?"Hide":"Show"}
      </button>
    </div>
    {
      show?
    <div className="tab">
      <div className="tab__header ">
        {tabData.map((t) => (
          <button
            key={t.id}
            className={tabActive === t.id ? "active" : ""}
            onMouseUp={() => alert(`mouse UP ${t.id}`)}
            onMouseDown={function () {
              return console.log(`mouse Down ${t.id}`);
            }}
            onClick={() => handelActiveTab(t.id)}
          >
            <span>{t.title}</span>
            <span className="tab-indicator"></span>
          </button>
        ))}
      </div>
      <div className="tab__content">
        {tabData[tabActive - 1].content} __ {user.name}--{user.id}--{count}
      </div>
    </div>
    :
    ""
    }
    </>
  );
}

export default App;
