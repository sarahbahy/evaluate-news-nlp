function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    // let formText = document.getElementById('name').value
    let formText = 'Main dishes were quite good, but desserts were too sweet for me.'
    const postData = async (url = "", data = {}) => {
        console.log('Analyzing:', data);
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'multipart/form-data',
            },
            body: JSON.stringify(data),
        });
        try {
            const newData = await response.json();
            return newData;
        } catch (error) {
            console.log('error', error);
        }
    };
    postData('http://localhost:8081/api', {txt: formText})
    .then(function(res) {
        document.getElementById('results').innerHTML = `Agreement: ${res.agreement} ,Subjectivity: ${res.subjectivity} `;
    })
    // fetch('http://localhost:8081/api', {
    //         method: "POST",
    //         headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         body: JSON.stringify({txt:formText})
    //       })
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = `Agreement: ${res.agreement} ,Subjectivity: ${res.subjectivity} `;
    // })
}

export { handleSubmit }
