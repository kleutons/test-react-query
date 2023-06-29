
import { useParams } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'
import { TypeRepository } from '../types/repository';
import { useState } from 'react';

export function Repo() {


    const [valueImput , setValueInput ] = useState('');

    const params = useParams()
    const currentRepository = params['*'] as string;

    const queryClient = useQueryClient();

    async function handleResetTime(){
        await queryClient.invalidateQueries(['repos'])
    }

    async function handleEditCache(){
        // Chamada API para atualizar a descrição do repositorio em cache
        const listRepos = queryClient.getQueryData<TypeRepository[]>(['repos'])

        if( listRepos ){

            const newRepos = listRepos.map( repo => {
                if(repo.full_name == currentRepository ){
                    return { ...repo, description: valueImput } 
                }else{
                    return repo;
                }
            })

            queryClient.setQueryData(['repos'], newRepos)
        }

    }

    function goBack() {
        window.history.back();
      }

    return (
        <>
            <h1>Hello Repo</h1>
            <p>{currentRepository}</p>
            <p>Editar Descrição Cache</p>
            <input onChange={(e) => setValueInput(e.target.value)} /> | <button onClick={handleEditCache}> Enviar </button>
            <br/>
            <br/>
            <button onClick={handleResetTime}>Ivalidar Zerar Tempo Fetch</button>

            <p>
               <button onClick={goBack}> {'<'} Voltar </button>
            </p>
        </>
    )
}