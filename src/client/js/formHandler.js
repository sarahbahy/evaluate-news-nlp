function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').innerText
    // let formText = 'Main dishes were quite good, but desserts were too sweet for me.'
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
    .then(function(newData) {
        document.getElementById('results').innerHTML = `Agreement: ${newData.agreement} `;
    })
}

export { handleSubmit }
