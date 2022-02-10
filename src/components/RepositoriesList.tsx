import React, { useState } from 'react';
import {useSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import { ActionType } from '../state/action-types';


type Props = {};

const RepositoriesList:React.FC<Props> = (props) => {
    const [query, setQuery] = useState("");
    const {searchRepositories}=useActions();
    const {data, error, loading}=useSelector((state)=>state.repositories)
    
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        searchRepositories(query);

    }
  return <div>
      <form onSubmit={onSubmit}>
          <input value={query} onChange={e=>setQuery(e.target.value)}/>
          <button>Search</button>
          {error && <h3>{error}</h3>}
          {loading && <h3>Loading...</h3>}
          {!error && !loading && data}
      </form>
  </div>;
};

export default RepositoriesList;