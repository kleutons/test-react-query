
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { TypeRepository } from '../types/repository';
import { ButtonsNav } from '../components/buttonsNav';



export function Repos() {

  const getUrl = async () => {
    const response = await axios.get('https://api.github.com/users/kleutons/repos');
    return response.data;
  }
  
  const { data, isFetching } = useQuery<TypeRepository[]>({
    queryKey: ['repos'],
    queryFn: getUrl,
    staleTime: 1000 * 60
  });


  return (
    <>
      <h1>
        Repo Use React Query
      </h1>
      
      <ButtonsNav />
      <ul>
        {isFetching && <p>Carregando...</p> }
        {data?.map(repo => {
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
