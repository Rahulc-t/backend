let retry = 0;
async function checkRetry() {
  if (retry < 3) {
    try{
    let data=await fetch('https://jsonplaceholder.typicode.com/posts/1')
    data=await data.json()
    console.log(data)
    }catch(error){
        console.log(error);
        console.log("retrying...");
        retry++
        checkRetry()
    }
  }
  else{
    console.log("retry limit reached")
  }
}
checkRetry()
