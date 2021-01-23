export function api({ urlBase = "http://localhost:3000" } = {}) {

    const get = (url) => fetch(`${urlBase}/${url}`).then(response => response.json())

    const put = ({ url, body, id }) => fetch(`${urlBase}/${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())

    const deleteEnd = ({ esquema = "videos", id }) => fetch(`${urlBase}/${esquema}/${id}`, {
        method: "DELETE",
    }).then(response => response.json())

    const post = ({ url, body }) => fetch(`${urlBase}/${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())

    return {
        get,
        put,
        deleteEnd,
        post
    }
}