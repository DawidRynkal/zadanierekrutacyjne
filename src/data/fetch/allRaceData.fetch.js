export const fetchRaces = () => {
    const promise = fetch('https://my-json-server.typicode.com/hdjfye/bet-api/races');
    
    return promise;

    // const response = await fetch('https://my-json-server.typicode.com/hdjfye/bet-api/races');
    // const data = await response.json();
    // return data;
}