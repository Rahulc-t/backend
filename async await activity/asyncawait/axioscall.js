let axios=require('axios')
async function sample(){
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response=>console.log(response.data))
    .catch(error=>console.log('ERROR',error))
}
sample()