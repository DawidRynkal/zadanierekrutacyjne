import React, { useEffect, useState } from 'react';
import { connect  } from 'react-redux';
import {fetchSingleRace} from '../../../data/actions/singleRace.actions';
import TableElement from '../../../components/TableElement/TableElement';
import {fetchAllParti} from '../../../data/actions/allParti.actions';



function SingleRace( {
    param, 
    fetchSingleRace, singleRace,
    fetchAllParti, allParti,
    }) {

    const [first, setStateFirst] = useState('');
    const [second, setStateSecond] = useState('');
    const [third, setStateThird] = useState('');

    useEffect(() => {
        fetchSingleRace(param.id);
        fetchAllParti();

    },[fetchSingleRace, param, fetchAllParti])
    
      const participantsInRace = allParti
      .filter(singleParti => {
          const single = singleRace.participants ? singleRace.participants
          .find(elem => elem === singleParti.id) : null;
          return single;
      });
      

    //   const onChangeHandlerFirst = (e) => {
    //       setStateFirst(e.target.value);
    //   }
    //   const onChangeHandlerSecond = (e) => {
    //     setStateSecond(e.target.value);
    // }
    // const onChangeHandlerThird = (e) => {
    //     setStateThird(e.target.value);
    // }

    // const onClickHandler = e => {

    // }

    return (
        <>
             <h1>{singleRace.name}</h1>
             
            <div>
                        <h2>Pierwszy : {first}</h2>
                          <h2>Drugi : {second}</h2>
                          <h2>Trzeci : {third}</h2>
              {
                  participantsInRace.map(single => (
                      <div>
                         
                        <li key={single.id}>{single.body}: {single.id}</li>
                        
                        {/* <div>
                            <label className="miro-radiobutton">
                                <input 
                                type="radio" 
                                value="1" 
                                name="firstPlace"
                                checked={stateRadio === "1"}
                                onChange={onChangeHandler}  />
                                <span>First</span>
                            </label>
                            <label className="miro-radiobutton">
                                <input 
                                type="radio" 
                                value="2" 
                                name="secondPlace"
                                checked={stateRadio === "2"}
                                onChange={onChangeHandler} />
                                <span>Second</span>
                            </label>
                            <label className="miro-radiobutton">
                                <input 
                                type="radio" 
                                value="3" 
                                checked={stateRadio === "3"}
                                name="thirdPlace"
                                onChange={onChangeHandler}  />
                                <span>Third</span>
                            </label>
                        </div> */}

                        <table  border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td><input 
                                type="radio" 
                                name = "1" 
                                value={single.body} 
                                /></td>
                                <td>first</td>
                            </tr>
                            <tr>
                                <td><input 
                                type="radio" 
                                name = "2"
                                value={single.body}  
                                /></td>
                                <td>second</td>
                            </tr>
                            <tr>
                                <td><input 
                                type="radio" 
                                name = "3"
                                value={single.body}  
                                /></td>
                                <td>third</td>
                            </tr>
                            
                        </table>
                      </div>
                      
                  ))
              }
              <hr/>
             
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
    fetchAllParti,
}
  )(SingleRace);