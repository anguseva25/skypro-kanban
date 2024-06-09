const url = 'https://wedev-api.sky.pro/api/user';

export const register = ({login, name, password}) => {
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            login: login,
            name: name,
            password: password,
        })
    }).then(res =>{
        if(res.status === 400){
            throw new Error('Некорректные данные');
        }
        return res.json()
    }).then(res =>res)
    }