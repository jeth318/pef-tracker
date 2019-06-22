const url = 'http://localhost:5000/api/pef';

export const createPef = payload => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    }    
    return fetch(url, options);
}

export const updateOne = payload => {
    const options = {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload),
        method: 'PUT'
    }    
    return fetch(url, options);
}

export const findOneByDate = date => {
    const options = {
        'content-type': 'application/json',
        body: JSON.stringify(payload),
        method: 'GET'
    }    
    return fetch(`${url}/${date}`);
}