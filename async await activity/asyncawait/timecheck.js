let link = 'https://jsonplaceholder.typicode.com/posts/1';

async function fetchData() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, 10000); // cancel after 10 seconds

  try {
    const response = await fetch(link, { signal: controller.signal });
    const data = await response.json();
    console.log(data); // log the data to the console
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Request canceled due to timeout');
    } else {
      console.error(error);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

fetchData();