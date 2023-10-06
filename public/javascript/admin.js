console.log('admin.js')

const url = 'http://localhost:3000/admin/insert-data'
const message = document.getElementById('message')
message.style.visibility = 'hidden'

const btnSubmit = document.getElementById('btn-submit')
btnSubmit.addEventListener('click', (e) => {

    e.preventDefault()
    console.log('clicked')

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const age = document.getElementById('age').value
    const dob = document.getElementById('dob').value
    if (age > 0) {

        const data = { name, email, age, dob }
        // console.log(data)
        sendData(url, data)
        
    }else {

        message.style.color = 'red'
        message.innerText = 'Age cannot be negative'
        message.style.visibility = 'visible'
    }
})

async function sendData(url, data) {

    try {

        const response = await fetch(url, {

            method: 'POST',

            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify(data)
        })

        const responseData = await response.json()
        // console.log(responseData)

        if (responseData.message === 'success') {

            message.style.visibility = 'visible'
        } else {

            message.style.visibility = 'visible'
            message.style.color = 'red'
            message.innerText = 'Something went wrong'
        }
    } catch (error) {
        console.log(error.message)
    }
}