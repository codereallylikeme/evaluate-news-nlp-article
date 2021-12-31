import { urlCheck } from './urlChecker';

function handleSubmit(event) {
  event.preventDefault();

  // get the form input value
  let formText = document.getElementById('urlInput').value;
  // check check the URL validity.
  if (Client.urlCheck(formText)) {
    postData('http://localhost:8081/api', { url: formText }).then(
      function (result) {
        // dynamically fill the content page with the response body
        document.querySelector(
          '#polarity',
        ).innerHTML = `Polarity: ${result.score_tag}`;
        document.querySelector(
          '#agreement',
        ).innerHTML = `Agreement: ${result.agreement}`;
        document.querySelector(
          '#subjectivity',
        ).innerHTML = `Subjectivity: ${result.subjectivity}`;
        document.querySelector(
          '#confidence',
        ).innerHTML = `Confidence: ${result.confidence}`;
        document.querySelector('#irony').innerHTML = `Irony:${result.irony}`;
      })
  
      
  } else {
    alert('Please check your Url address');
  }
}
  // function Post route
  const postData = async (url = '', data = {}) => {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      try{
      const res = await response.json();
      console.log(res);
      return res;
    } catch (error) {
      console.log('error', error);
    }
  }


export { handleSubmit };
