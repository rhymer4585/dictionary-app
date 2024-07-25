async function fetchData() {
    try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello');
        const data = await response.json();
        

       
        console.log(data)






    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
