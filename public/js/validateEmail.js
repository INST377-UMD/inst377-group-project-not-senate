

async function ve2() {
    let existingEmail = false;
    let email = document.getElementById('mailerInput').value;
    //console.log('Checking ' + email)
    await fetch('http://localhost:3000/checkEmail', {
        method: 'POST',
        body: JSON.stringify({
            "email": `${document.getElementById('mailerInput').value}`,
        }),
    })
    .then((res) => res)
    .then(async res => {
        //console.log(res)


        //console.log('Status:', res.status)
        if (res.status == 200 || res.status == 304) {
            return res.json()
        }
        throw Error(JSON.stringify(await res.json()));
    })
    .then((res) => {
        //console.log(res)
        for(let i in res) {
            if (email == res[i].email) {
                existingEmail = true;
            }
            //console.log(res[i].email)
        }
    })

    .catch((err) => {
        //console.log(err)
    })

    let result = document.getElementById('mailingResult');
    result.innerHTML = '';
    if(existingEmail) {
        let h2 = document.createElement('h2')
        h2.innerHTML = `Email: ${email} is already in the mailing list`;
        h2.setAttribute('class', 'resultBad')
        result.append(h2)
    } else {
        let h2 = document.createElement('h2')
        h2.innerHTML = `Adding email: ${email} to the mailing list`;
        h2.setAttribute('class', 'resultGood')
        result.append(h2)

        addEmail(email)
    }
}



















//validateEmail() -
//  grabs the email from the email field and passes it to the api
function validateEmail() {
    email = document.getElementById('emailInput').value
    console.log("Checking: " + email);

    if (email.length === 0) {
        console.log("Please use an email")
        return
    }

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://api.eva.pingutil.com/email?email=${email}`, requestOptions) //https kept erroring out. http seems to work for some reason
        .then(response => response.text())
        .then(result => {
            //console.log(result);

            let data = JSON.parse(result)

            data = data.data;
            //console.log(data)

            const result_div = document.getElementById('result');
            result_div.innerHTML = ''; //clear the div

            let email_result = document.createElement('h1');
            email_result.innerHTML = data.email_address;


            if (data.deliverable) { //if it is deliverable make it green, otherwise make it red
                email_result.setAttribute('class', 'resultGood emailBig')
            } else {
                email_result.setAttribute('class', 'resultBad emailBig')

            }
            result_div.append(email_result);



            let result_explanation = document.createElement('p');
            if (data.deliverable) {
                result_explanation.innerHTML = 'This email address is real and email can be delivered here';
            } else {
                result_explanation.innerHTML = 'This email address is not real and email cannot be delivered here'
            }
            result_explanation.setAttribute('class', 'resultExplanation')

            result_div.append(result_explanation)


            let dataTable = document.createElement('table')
            for(let i in data) {
                i2 = String(i)
                //console.log(i2)
                //console.log(`${i} :   ${data[i2]}`)
                row = document.createElement('tr')
                row.setAttribute('class', 'trow')

                
                key = document.createElement('td')
                key_text = i;
                first_letter = (key_text[0].toUpperCase())
                key_text = key_text.slice(1)
                key_text = first_letter + key_text;
                key_text = key_text.replaceAll('_', " ");

                key.innerHTML = key_text;
                key.setAttribute('class', 'key')
                row.append(key)

                value = document.createElement('td')
                value.innerHTML = data[i]
                value.setAttribute('class', 'value')
                row.append(value)
                dataTable.append(row)
            }
            result_div.append(dataTable)


        })
        .catch(error => console.log('error', error));
}