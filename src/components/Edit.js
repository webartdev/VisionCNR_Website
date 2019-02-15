import React from 'react';

const Edit = (props) => {
    console.log(props)
    return(
        <div className="containerMain"><span class="titleMain">Editing Records with id of {props.match.params.id}</span></div>
    );
}

export default Edit;