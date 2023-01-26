import { useQuery } from 'react-query';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getUser } from '../service/authApi';


const ProtectedRoot = () => {
    const { auth, setAuth } = useAuth();

    const { data } = useQuery(['authUser',data.userId], ()=>getUser(data.userId))


    if (!auth) { return <Navigate to="/login" /> }

    return <Outlet />
}

export default ProtectedRoot;