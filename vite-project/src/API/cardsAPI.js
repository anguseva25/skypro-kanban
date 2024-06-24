
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

export const addNewCard = ({token, newTask}) => {
    return fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
            title: newTask.title,
            topic: newTask.topic,
            status: newTask.status,
            description: newTask.description,
            date: newTask.date,
        }),
    }).then(res => {
        if (res.status === 400) throw new Error("Некорректные данные, не в формате JSON");
        if (res.status === 401) throw new Error("нет авторизации");
        if (res.status === 500) throw new Error("ошибка на сервере");
        if (!res.ok) throw new Error("Что-то я заплутал...");

        return res.json()
    })
}

export const deleteCard = ({token, id}) => {
    return fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        method: 'DELETE',
    }).then(res => {
        if (res.status === 400) throw new Error("Некорректные данные, не в формате JSON");
        if (res.status === 401) throw new Error("нет авторизации");
        if (res.status === 500) throw new Error("ошибка на сервере");
        if (!res.ok) throw new Error("Что-то я заплутал...");

        return res.json()
    })
}
