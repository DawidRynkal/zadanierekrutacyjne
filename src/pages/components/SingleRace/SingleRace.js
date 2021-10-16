import React, { useEffect, useState } from 'react';
import { connect  } from 'react-redux';
import {
    fetchSingleRace,
    setFirstPlace,
    setSecondPlace,
    setThirdPlace,
    setBetAmount
} from '../../../data/actions/singleRace.actions';
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
    setBetAmount,
    }) {
    const [betState, setBetState] = useState();

    useEffect(() => {
        fetchSingleRace(param.id);
        fetchAllParti();

    },[fetchSingleRace, param, fetchAllParti])
    
      const participantsInRace = allParti.filter(
          (singleParti) => 
           singleRace.participants
            ? singleRace.participants.find((elem) => elem === singleParti.id) : null );

            console.log(participantsInRace, firstPlace, secondPlace, thirdPlace);

    const setAmountToStore = () => {
       setBetAmount(betState);
    }
    
    const onClickForThird = (id) => {
        if(id === firstPlace) {
            setFirstPlace(undefined);
        } else if(id === secondPlace) {
            setSecondPlace(undefined)
        }
      setThirdPlace(id);
    }
    const onClickForSecond = (id) => {
        if(id === firstPlace) {
            setFirstPlace(undefined);
        } else if(id === thirdPlace) {
            setThirdPlace(undefined)
        }
      setSecondPlace(id)
    }
    const onClickForFirst = (id) => {
        if(id === secondPlace) {
            setSecondPlace(undefined);
        } else if(id === thirdPlace) {
            setThirdPlace(undefined)
        }
      setFirstPlace(id)
    }
    
            
    return (
    <>
      <h1>{singleRace.name}</h1>
      <div className="formBetWrap">
        <label>
            <span className="formText">Bet amount : </span>
            <input className="inputBet" type="number" onChange={e => setBetState(e.target.value)} />
        </label>
        <button className="submitBet" onClick={() => setAmountToStore()}>submit</button>
      </div>
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
                  onClick={() => onClickForFirst(participant.id)}
                  type={"radio"}
                  name={`firstPlace-${participant.id}`}
                  checked={participant.id === firstPlace}
                //   disabled={
                //     (participant.id === secondPlace  || participant.id === thirdPlace ) ?
                //      true : false
                //   }
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`secondPlace-${participant.id}`}
                  checked={participant.id === secondPlace}
                //   disabled={
                //     (participant.id === firstPlace  || participant.id === thirdPlace ) ?
                //      true : false
                //   }
                  onClick={() => onClickForSecond(participant.id)}
                />
              </td>
              <td>
                <input
                  type="radio"
                  name={`thirdPlace-${participant.id}`}
                  checked={participant.id === thirdPlace}
                //   disabled={
                //     (participant.id === firstPlace  || participant.id === secondPlace ) ?
                //      true : false
                //   }
                  onClick={() => onClickForThird(participant.id)}
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
      betAmount: state.singleRace.betAmount,
    }
}, {
    fetchSingleRace,
    fetchAllParti,
    setFirstPlace,
    setSecondPlace,
    setThirdPlace,
    setBetAmount,
}
  )(SingleRace);