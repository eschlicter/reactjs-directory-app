import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = (props) => (
    // console.log("props", props)
    <div className="card-list">
        {
            props.students.map(student =>  (
            <Card key={student.id} student={student} />))
        }
    </div>
)