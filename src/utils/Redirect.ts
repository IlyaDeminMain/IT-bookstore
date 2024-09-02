import { useNavigate, useLocation } from 'react-router-dom';

export const RedirectToHome = () => {
    const navigate = useNavigate();
    const location = useLocation();

    if (location.pathname.includes('/')) {
        navigate('/', { replace: true });
    }

    return null;
};