import { useEffect } from "react";
import Listtemplate from "./Template/Listtemplate";
import FullList from "./model/FullList";


function App() {
const flist = FullList.instance;

useEffect(()=> {},[flist])

  return (
    <>
      Application here
      <Listtemplate fulllist={flist}/>
    </>
  );
}

export default App;
