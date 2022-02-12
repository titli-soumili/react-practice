/*
Things to remember:
example 1: This we can use for simpler cases.

example 2:
If we run "example 2", in the console, it will throw an error by saying "Each child in a list should
have a unique "key" prop." which means, each item in the list rendered using the map operator should
have an attribute called "key" and the value to that attribute should be unique within the list. So
"example 3" is the correct way to render a list.

example 3: By running this, you will not see any error in the console. The attribute "key" is not a 
prop. It is reserved in React and is not accessable in the child components.

Features of "key" attribute:
    1. A "key" is a special string attribute need to include while creating lists of elements.
    2. Keys are not accessable in the child components.
    3. Keys give the element a stable identity.
    4. Keys help React identify which items have changed, added or removed.
    5. Keys help in efficient update of the user interface.
*/

import React from 'react';
import PersonList from './PersonList';

function NameList() {
    //== example 1 ==//
    // const nameArr = ['Soumli', 'Kunal', 'Tara', 'Manoj'];
    // const nameList = nameArr.map( name => <div>Hello {name}</div>);
    // return <div>{nameList}</div>;

    //=== example 2: refactor the jsx ==//
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Soumili',
    //         age: 32,
    //         skill: 'PHP' 
    //     },
    //     {
    //         id: 2,
    //         name: 'Kunal',
    //         age: 32,
    //         skill: 'MeanStack' 
    //     },
    //     {
    //         id: 3,
    //         name: 'Tara',
    //         age: 32,
    //         skill: 'React' 
    //     },
    //     {
    //         id: 4,
    //         name: 'Manoj',
    //         age: 32,
    //         skill: 'Angular' 
    //     }
    // ];

    // const personData = persons.map(person => <PersonList person = {person} />)

    // return <div>{personData}</div>


     //== example 3: Passing unique value to attribute key to the component to avoid error in console ===//
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

    const personData = persons.map(person => <PersonList key={person.id} person = {person} />)

    return <div>{personData}</div>
}

export default NameList;
