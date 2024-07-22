async function check(){
    let response= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    let data= await response.json()
    for(let i=0;i<data.length;i++){
        if(data[i].userId==1){
            console.log(data[i])
        }

    }
    
}
check()