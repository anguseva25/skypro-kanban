
export const getCards = (token) => {
    return fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then(res => {
            if (res.status === 400) throw new Error("Некорректные данные");
            if (res.status === 401) throw new Error("нет авторизации");
            if (res.status === 500) throw new Error("ошибка на сервере");
            if (!res.ok) throw new Error("Что-то я заплутал...");

            return res.json()
    })
}