let linkArray=[
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/4',
    'https://jsonplaceholder.typicode.com/posts/5'
]

let timeLog = async () => {
    let longestTime = 0;
    let longestLink = '';
  
    for (let i = 0; i < linkArray.length; i++) {
      let start = Date.now();
      let response = await fetch(linkArray[i]);
      await response.json();
      let end = Date.now();
      let timeTaken = end - start;
  
      if (timeTaken > longestTime) {
        longestTime = timeTaken;
        longestLink = linkArray[i];
      }
    }
  
    console.log(`Longest time taken: ${longestTime}ms for ${longestLink}`);
  };
  timeLog()