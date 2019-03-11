let BASEURL = `https://bg-test-api.herokuapp.com/api`;

const Helper = (method, URL, data) => {
    if (method === 'GET') {
        return (
            fetch(`${BASEURL}${URL}`)
                .then(res => {
                    return res.json();
                })
                .catch(error => {
                    console.log(error)
                })
        )
    }
    if (method === 'POST') {
        return (
            fetch(`${BASEURL}${URL}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    return res.json();
                })
        )
    }
    if (method === 'PUT') {
        return (
            fetch(`${BASEURL}${URL}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(res => {
                    return res.json();
                })
        )
    }
    if (method === 'DELETE') {
        return (
            fetch(`${BASEURL}${URL}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then(res => {
                    return res.json();
                })
        )
    }
}

export default Helper;