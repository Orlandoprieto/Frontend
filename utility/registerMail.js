const registerMail = async () => {
    const mail = document.getElementById('mail').value


    const object = {
        mail: mail
    }

    const url = 'https://orcogamesbackend-orcogames.koyeb.app/newsletter'

    const data = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })

    return data.json()

}

export default registerMail