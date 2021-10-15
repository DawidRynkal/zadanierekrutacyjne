export const fetchSingleRace = ({ id }) => {
    const promise = fetch(`https://my-json-server.typicode.com/hdjfye/bet-api/races/${id}`);
    
    return promise;

   
}