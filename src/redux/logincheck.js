import { useSelector } from 'react-redux';
import { selectUser } from '../redux/useSlice';
import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { login } from '../redux/useSlice';



function HandleUserDetails(){
const dispatch = useDispatch();
const user = useSelector(selectUser);

    if (user) {
        return user
    } 
    else {
        const token1 =localStorage.getItem('token')
        if (token1) {
            const user = jwt(token1)
            console.log(user);
            dispatch(
                login({
                    id: user.id,
                    name: user.username,
                    user_type: user.user_type,
                })
            )
        }
    }
}
export default HandleUserDetails;

