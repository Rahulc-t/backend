let linkArray=[
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5'
]
let timeLog=async()=>{
    for(let i=0;i<linkArray.length;i++){
        let start=Date.now()
        let response=await fetch(linkArray[i])
        await response.json()
        let end=Date.now()
        console.log(response);
        console.log(`Time taken for ${linkArray[i]} is ${end-start}`)

        
    }
}
timeLog()