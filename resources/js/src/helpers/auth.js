export function login(credetial) {
    return new Promise((res, rej) => {
        axios
            .post("api/v1/auth/login", credetial)
            .then(response => {
                res(response);
            })
            .catch(err => {
                rej("wrong email or password");
            });
    });
}

export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if (!userStr) {
        return null;
    }
    return JSON.parse(userStr);
}
