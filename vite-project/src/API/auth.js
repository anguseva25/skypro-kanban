const url = 'https://wedev-api.sky.pro/api/user';

export const register = ({login, name, password}) => {
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify({
            login: login,
            name: name,
            password: password,
        })
    }).then(res => {
        if (res.status === 400) throw new Error("Некорректные данные");
        if (res.status === 500) throw new Error("ошибка на сервере");
        if (!res.ok) throw new Error("Что-то я заплутал...");

    return res.json()
    })
}


export const signIn = ({login, password}) => {
    return fetch(url + '/login',{
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        })
    }).then(res => {
        if (res.status === 400) throw new Error("Некорректные данные");
        if (res.status === 500) throw new Error("ошибка на сервере");
        if (!res.ok) throw new Error("Что-то я заплутал...");

        return res.json()
    })
}