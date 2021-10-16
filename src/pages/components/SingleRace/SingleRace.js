import React, { useEffect, useMemo } from 'react';
import { connect  } from 'react-redux';
import {fetchSingleRace} from '../../../data/actions/singleRace.actions';
import TableElement from '../../../components/TableElement/TableElement';
import {fetchParticipiant} from '../../../data/actions/participiant.actions';
import {fetchAllParti} from '../../../data/actions/allParti.actions';



function SingleRace( {param, fetchSingleRace,
     singleRace, participiant, fetchParticipiant,
     fetchAllParti, allParti,
    }) {

    useEffect(() => {
        fetchSingleRace(param.id);
        fetchAllParti();

    },[fetchSingleRace, param, fetchAllParti])
      //console.log(allParti);

    //   const listOfParti = singleRace.participants ? singleRace.participants.map( item => {
    //     return item;
    // }) : null;

    
      const participantsInRace = allParti
      .filter(singleParti => {
          const single = singleRace.participants ? singleRace.participants
          .find(elem => elem === singleParti.id) : null;
          return single;
      });
      console.log(participantsInRace);

       

      
        // const partiElem = listOfParti ? listOfParti.map( item => {
        //     return item;
           
        // }) : null;
     
    //     const findParti = allParti.map(parti => {
    //         const findElem = partiElem ? partiElem.map( item => parti.id === item ) : null;

    //         return findElem;
    //     });
    // console.log(findParti);

    
        

    return (
        <>
             <h1>{singleRace.name}</h1>
             
            {/* {
                listOfParti ? listOfParti.map(item => (
                    <TableElement listP={item}></TableElement>
                )) : <div></div>
            } */}
            
            {/* <div>{singleP}</div> */}
            <div>
               
              {
                  participantsInRace.map(single => (
                      <li key={single.id}>{single.body}: {single.id}</li>
                  ))
              }
              <hr/>
              {/* {allParti.map(single => (
                  <li key={single.id}>{single.body}</li>
              ))} */}
               
            </div>
        </>
       
    )
}
export default  connect( (state, props) => {
    return {
      singleRace: state.singleRace.singleRace,
      param: props.match.params,
      participiant: state.participiant.participiant,
      allParti: state.allParti.allParti,
    }
}, {
    fetchSingleRace,
    fetchParticipiant,
    fetchAllParti,
}
  )(SingleRace);