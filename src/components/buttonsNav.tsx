import { useNavigate } from "react-router-dom";

export function ButtonsNav(){
    const navigate = useNavigate();

    return(
        <div>
            <button  onClick={() => navigate('/')}  > Repo React Query </button> 
            &nbsp;|&nbsp;
            <button onClick={() => navigate('/reposlocal')} > Repo Local </button> 
        </div>
    )
}