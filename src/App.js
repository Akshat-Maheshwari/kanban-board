import React, {useState, useEffect} from 'react';
import { GetData } from './Utility/api';
import { GroupBy, SortBy } from './Utility/Utils';
import Dashboard from './Components/Dashboard';
import { Navbar } from './Components/Navbar';
import './App.css';

function App() {

  const [loading, setLoading]=useState(true);
  const [data, setData]=useState(null);
  const [display, setDisplay]=useState(null);
  const [error, setError] = useState(null);
  const [group,setGroup]=useState(null);
  const [sort,setSort] =useState(null);
  useEffect(() => {
    GetData(setLoading, setData, setError);
  }, [])

  useEffect(() => {
    if(!loading){
      let defaultGrouping="priority";
      let defaultSorting="priority";
      if(localStorage.getItem("group")) defaultGrouping=JSON.parse(localStorage.getItem("group"));
      else localStorage.setItem("group", JSON.stringify(defaultGrouping));
      if(localStorage.getItem("sort")) defaultSorting=JSON.parse(localStorage.getItem("sort"));
      else localStorage.setItem("sort", JSON.stringify(defaultSorting));
      firstCall(defaultGrouping,defaultSorting);
    }
  }, [loading])
  
  function firstCall(groupKey, sortKey){
    const tempDisplay=GroupBy(groupKey,data);
    setDisplay(tempDisplay);
    setGroup(groupKey);
    const tempSort=SortBy(sortKey,data,tempDisplay);
    setDisplay(tempSort);
    setSort(sortKey);
  }
  function handleOnClick(key){
    const tempDisplay=GroupBy(key,data);
    setDisplay(tempDisplay);
    setGroup(key);
    localStorage.setItem("group", JSON.stringify(key))
  }
  function handleSort(key){
    const tempSort=SortBy(key,data,display);
    setDisplay(tempSort);
    setSort(key);
    localStorage.setItem("sort", JSON.stringify(key))
  }
  
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && display && sort && (<>
      <Navbar handleOnClick={handleOnClick} handleSort={handleSort} sort={sort} group={group}/>  
      <Dashboard show={display} data={data} group={group} />
      </>)}
    </>
  );
}

export default App;
