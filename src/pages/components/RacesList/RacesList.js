import React, { useEffect } from 'react';
import { RaceTitleWrap } from '../../../components';
import { connect  } from 'react-redux';
import { fetchRaces } from '../../../data/actions/races.actions';



function RaceList({ races, fetchRaces }) {
    useEffect(() => {
        fetchRaces();
    }, [fetchRaces])
console.log(races);
    // const fetchAllRaces = async () => {
    //     const response = await fetch('https://my-json-server.typicode.com/hdjfye/bet-api/races');
    //     const data = await response.json();
    //     console.log(data);
    //     return data;
        
    // } 
    // fetchAllRaces();


    
    return (
        <div>
            <h1>główny komponent lista wyścigów</h1>
            <RaceTitleWrap></RaceTitleWrap>
            <h1></h1>
        </div>
       
    )
}
export default connect( state => {
    return {
      races: state.races.races,
    }
}, {
    fetchRaces,
}
  )(RaceList);