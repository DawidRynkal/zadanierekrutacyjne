export const fetchParticipiant = ({ id }) => {
    const promise = fetch(`https://my-json-server.typicode.com/hdjfye/bet-api/participants/${id}`);
    
    return promise;

   
}