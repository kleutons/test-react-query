
import { Link } from 'react-router-dom';
import { TypeRepository } from '../types/repository';
import { useEffect, useState } from 'react';
import { ButtonsNav } from '../components/buttonsNav';
import { fecthAxios, setUrl } from '../utils/fecthAxios';


export function ReposLocal() {

  const CACHE_KEY = 'repos';
  const CACHE_EXPIRATION = 1000 * 60 * 60 * 12; // 12 horas em milissegundo

  const getUrl = async () => {
    const response = await fecthAxios(setUrl('/users/kleutons/repos'));
    return response.data;
  }


  const  [dataLocal, setDataLocal] = useState<TypeRepository[] | null>(null);


  useEffect( () => {
    const storedData = localStorage.getItem(CACHE_KEY);
    const fetchAndStoreData = async () => {
      if(storedData) {
        const parsedData = JSON.parse(storedData);
        const storedTime = parsedData.time;
        const storedRepos = parsedData.data;

        if (Date.now() - storedTime <= CACHE_EXPIRATION) {
          setDataLocal(storedRepos);
          return;
        }
      }


      const fetchData = await getUrl();
      setDataLocal(fetchData);
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: fetchData, time: Date.now() }));
    }

    fetchAndStoreData();
    
  }, [])


  return (
    <>
      <h1>
          Repo Local
        </h1>
        
        <ButtonsNav />
      
      <ul>
        {dataLocal?.map(repo => {
          return(
            <li key={repo.full_name}>
              <Link to={`/repo/${repo.full_name}`} >
                {repo.full_name}
              </Link>
              <p>{repo.description}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
}
