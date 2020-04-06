function handleSubmit(event) {

    //get data from the form field
    let URL=document.getElementById('name').value;

    //check the given url is valid or not

  const isNameValid=Client.checkForName(URL);
  
  
  if(isNameValid)
  {
        postDataToServer('http://localhost:3000/article',{url:URL}).then(function
        (data){
            updateUI(data);
        });
  }
  else{
      document.getElementById('message').innerHTML="The URL entered by you is not valid";
      return false;
    }
    return false;
}

const postDataToServer=async (url='',data={})=>
{
    const response=await fetch(url,
        {
            method:'POST',
            credentials:'same-origin',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data),
        });

        try{
            const dataFromServer=response.json();
            console.log('data received from server');
            return dataFromServer;
        }
        catch(error)
        {
            console.log(error);
        }
}
function updateUI(data)
{
    document.getElementById('polarity').innerHTML="Polarity:"+data.polarity;
    document.getElementById('subjectivity').innerHTML="Subjectivity"+data.subjectivity;
    document.getElementById('text').innerHTML="Text"+data.text;
    document.getElementById('polarity-confidence').innerHTML="polarity-confidence"+data.polarity_confidence;
    document.getElementById('subjectivity-confidence').innerHTML="subjectivity-confidence"+subjectivity_confidence;
}
export { handleSubmit }
