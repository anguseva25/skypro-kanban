const url = 'https://wedev-api.sky.pro/api/user';

export async function register({login, name, password}) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            name: name,
            password: password,
        })
    })

    const data = await response.json()

    if (!response.ok)
        throw new Error(data.error)

    return data
}

export const signIn = ({login, password}) => {
    return fetch(url + '/login', {
        method: 'POST',
        body: JSON.stringify({
            login: login,
            password: password,
        })
    })
        .then(res => {
            if (res.status === 400) throw new Error("такой пользователь не найден");
            if (res.status === 500) throw new Error("ошибка на сервере");
            if (!res.ok) throw new Error("Что-то я заплутал...");

            return res.json()
        })
}
