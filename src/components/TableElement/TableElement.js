import React, { useEffect } from 'react';
import { connect  } from 'react-redux';
import { fetchParticipiant } from '../../data/actions/participiant.actions';

function TableElement({participiant, fetchParticipiant, props}) {

    useEffect(() => {
        console.log(props);
    }, [fetchParticipiant])
   
    
    return (
        <div>{props.listP}</div>
    )
}
export default connect( (state, props) => {
    return {
      participiant: state.participiant.participiant,
      props: props,
    }
}, {
    fetchParticipiant,
}
  )(TableElement);