import React, { useEffect, useState } from 'react';
import { connect  } from 'react-redux';
import {
    fetchSingleRace,
    setFirstPlace,
    setSecondPlace,
    setThirdPlace,
} from '../../../data/actions/singleRace.actions';
import TableElement from '../../../components/TableElement/TableElement';
import {fetchAllParti} from '../../../data/actions/allParti.actions';



function SingleRace( {
    param, 
    fetchSingleRace,
    singleRace,
    fetchAllParti,
    allParti,
    firstPlace,
    secondPlace,
    thirdPlace,
    setFirstPlace,
    setSecondPlace,
    setThirdPlace,
    }) {

    useEffect(() => {
        fetchSingleRace(param.id);
        fetchAllParti();

    },[fetchSingleRace, param, fetchAllParti])
    
      const participantsInRace = allParti.filter(
          (singleParti) => 
           singleRace.participants
            ? singleRace.participants.find((elem) => elem === singleParti.id) : null );

            console.log(participantsInRace, firstPlace, secondPlace, thirdPlace);
    return (
    <>
      <h1>{singleRace.name}</h1>
      <table>
        <tr>
          <td>
            <h2>Participant</h2>
          </td>
          <td>
            <h2>First place</h2>
          </td>
          <td>
            <h2>Second place</h2>
          </td>
          <td>
            <h2>Third place</h2>
          </td>
        </tr>
        {participantsInRace.map((participant) => {
          console.log(
            participant.id,
            firstPlace,
            participant.id === firstPlace
          );
          return (
            <tr>
              <td>{participant.body}</td>
              <td>
                <input
                  onClick={() => setFirstPlace(participant.id)}
                  type="radio"
                  name={`firstPlace-${participant.id}`}
                  checked={participant.id === firstPlace}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`secondPlace-${participant.id}`}
                  checked={participant.id === secondPlace}
                  onClick={() => setSecondPlace(participant.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`thirdPlace-${participant.id}`}
                  checked={participant.id === thirdPlace}
                  onClick={() => setThirdPlace(participant.id)}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default  connect( (state, props) => {
    return {
      singleRace: state.singleRace.singleRace,
      param: props.match.params,
      participiant: state.participiant.participiant,
      allParti: state.allParti.allParti,
      firstPlace: state.singleRace.firstPlace,
      secondPlace: state.singleRace.secondPlace,
      thirdPlace: state.singleRace.thirdPlace,
    }
}, {
    fetchSingleRace,
    fetchAllParti,
    setFirstPlace,
    setSecondPlace,
    setThirdPlace,
}
  )(SingleRace);