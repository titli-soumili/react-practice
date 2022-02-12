import React from 'react';
import PersonList from './PersonList';

function NameList() {
    // example 1
    // const nameArr = ['Soumli', 'Kunal', 'Tara', 'Manoj'];
    // const nameList = nameArr.map( name => <div>Hello {name}</div>);
    // return <div>{nameList}</div>;

    // example 2: refactor the jsx
    const persons = [
        {
            id: 1,
            name: 'Soumili',
            age: 32,
            skill: 'PHP' 
        },
        {
            id: 2,
            name: 'Kunal',
            age: 32,
            skill: 'MeanStack' 
        },
        {
            id: 3,
            name: 'Tara',
            age: 32,
            skill: 'React' 
        },
        {
            id: 4,
            name: 'Manoj',
            age: 32,
            skill: 'Angular' 
        }
    ];

    const personData = persons.map(person => <PersonList person = {person} />)

    return <div>{personData}</div>
}

export default NameList;
