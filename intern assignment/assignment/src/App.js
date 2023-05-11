import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/action';
import GridExample from './component';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{margin:"auto",display:"grid", gridTemplateColumns:"repeat(4,1fr)", justifyContent:"center", alignItems:"center",textAlign:"center", cursor:"pointer"}}>
      {data.map((item) => (
        <GridExample {...item}/>
      ))}
       
     
    </div>
  );
}

export default App;
