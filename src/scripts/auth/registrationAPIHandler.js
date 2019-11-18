const url = "http://localhost:8088"

const registrationAPI = {
    getUsers() {
        return fetch(`${url}/users`)
            .then(response => response.json())
    },
    saveNewUser(newUser) {
        return fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
    },
    getSingleUser(username) {
        return fetch(`${url}/users?q=${username}`)
            .then(response => response.json())
    }
}

export default registrationAPI