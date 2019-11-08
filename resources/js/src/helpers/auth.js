import { setAuthorization } from "./general";

export function login(credentials) {

    return new Promise((res, rej) => {
        axios.post('/api/v1/login', credentials)
            .then((response) => {
                setAuthorization(response.data.access_token)
                res(response.data);
            })
            .catch((err) => {
                console.log("error login", err)
                rej("Email atau password Anda salah!")
            })
    })
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user")

    if (!userStr) {
        return null
    }

    return JSON.parse(userStr)
}