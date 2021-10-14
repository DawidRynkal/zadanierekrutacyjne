export const fetchRaces = () => {
    const promise = fetch('https://my-json-server.typicode.com/hdjfye/bet-api/races');
    
    return promise;
}