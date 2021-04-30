function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
     // check what text was put into the form field
    if(client.checkForName(formText)) {
        const postData = async (url = "", data = {}) => {
            console.log('Analyzing:', data);
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'same-origin',
                mode: 'cors',
                headers: {
                'Content-Type': 'application/json',
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
            document.getElementById('results').innerHTML = `Agreement: ${newData.agreement}
            <br> Polarity:${ polarity[newData.score_tag].toUpperCase()}
            <br> Subjectivity:${ newData.subjectivity }
            <br> Confidence:${ newData.confidence }
            <br> Irony:${ newData.irony }`;
        })
    }else{
        alert('invalid text')
    }
}
const polarity={
    'P+': 'strong positive',
    'P': 'positive',
    'NEW': 'neutral',
    'N':'negative',
    'N+': 'strong negative',
    'NONE':'no sentiment',
}
export { handleSubmit }
