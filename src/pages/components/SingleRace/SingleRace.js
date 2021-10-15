import React, { useEffect } from 'react';
import { connect  } from 'react-redux';
import {fetchSingleRace} from '../../../data/actions/singleRace.actions';
import TableElement from '../../../components/TableElement/TableElement';



function SingleRace( {param, fetchSingleRace, singleRace}) {

    useEffect(() => {
        fetchSingleRace(param.id);

    },[fetchSingleRace, param])

    const participants = singleRace.participants;

    return (
        <>
            <h1>{singleRace.name}</h1>
            <div>
                {
                participants.map( participiant => 
               (
                    <TableElement props={participiant}></TableElement>
                ) )}
               
            </div>
        </>
       
    )
}
export default  connect( (state, props) => {
    return {
      singleRace: state.singleRace.singleRace,
      param: props.match.params
    }
}, {
    fetchSingleRace,
}
  )(SingleRace);