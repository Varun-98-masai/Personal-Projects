import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './Redux/action';
import NavScrollExample from './navbar';
import BasicExample from './component';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const page = useSelector((state) => state.page);
  const hasNextPage = useSelector((state) => state.hasNextPage);

  console.log(data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(fetchData(page));
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div >
     <NavScrollExample/>
     <div style={{margin:"auto",marginTop:"50px",display:"grid", gridTemplateColumns:"repeat(4,1fr)", justifyContent:"center", alignItems:"center",textAlign:"center", cursor:"pointer"}}>
     {data.map((item) => (
        <BasicExample {...item}/>
      ))}
      </div> 
        {hasNextPage && (
          <div style={{display:"flex", justifyContent:"center",width:"100%"}}>
             <button onClick={handleLoadMore} >Next</button>
          </div>
       
      )}
     
    </div>
  );
}

export default App;
