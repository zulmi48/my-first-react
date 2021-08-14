import axios from "axios";
import { atom, selector } from "recoil";

const background = atom({
    key: 'switch-theme',
    default: 'dark'
})

const authUser = selector({
    key: 'auth-user',
    get: async () => {
        let user = null
        try {
            let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/7')
            user = { user: data }            
        } catch (e) {
            user = {user:e.message}
        }
        return user;
    }
        
})

export { authUser, background }
 