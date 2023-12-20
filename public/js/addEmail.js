async function addEmail(email) {
    var test = await fetch('http://localhost:3000/addEmail', {
        method: 'POST',
        body: JSON.stringify({
            "email": `${email}`,
        }),
        headers: {
            "Content-type":"application/json"
        }
    })
}