/*
Things to remember:
example 1: This we can use for simpler cases.

example 2: refactor the jsx:
If we run "example 2", in the console, it will throw an error by saying "Each child in a list should
have a unique "key" prop." which means, each item in the list rendered using the map operator should
have an attribute called "key" and the value to that attribute should be unique within the list. So
we should go with "List and Keys" approach to render a list which is explained in "example 3" below.

example 3: By running this, you will not see any error in the console. The attribute "key" is not a 
prop. It is reserved in React and is not accessable in the child components.

Features of "key" attribute:
    1. A "key" is a special string attribute need to include while creating lists of elements.
    2. Keys must be unique and are not accessable in the child components.
    3. Keys give the element a stable identity.
    4. Keys help React identify which items have changed, added or removed.
    5. Keys help in efficient update of the user interface.

Drawback of "key" attribute:
    If an array doesn't contain any unique item in it, using "example 3" will throw an error in the
    console. In "example 4" if we duplicate any of the item and use this as a value of "key" attribute,
    in the console, you will see an error saying:
        "Encountered two children with the same key, `Soumli`. Keys should be unique so that components
        maintain their identity across updates. Non-unique keys may cause children to be duplicated 
        and/or omitted — the behavior is unsupported and could change in a future version.". 
        
    So to fix this error, we are using "Index as key" approach which is explained in "example 5".

example 5: "Index as key": 
Using this method will also cause error in certain cases. Indexing will work only on static list values
otherwise it will messed up index with its values.
So, when to use "Index as key"?
    1. If the items in the list do not have any unique value.
    2. If the list is static or do not change (i.e. no addition alteration will be done with this list).
    3. If the list will never be reordered or filtered.
    4. To use "Index as key" safely, all the above 3 conditions must be satishfied.
*/

import React from 'react';
import PersonList from './PersonList';

function NameList() {
    //== example 1 ==//
    // const nameArr = ['Soumili', 'Kunal', 'Tara', 'Manoj'];
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
    //  const persons = [
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

    // const personData = persons.map(person => <PersonList key={person.id} person = {person} />)
    // return <div>{personData}</div>

    //== example 4 ==//
    // const nameArr = ['Soumli', 'Kunal', 'Tara', 'Manoj', 'Soumli'];
    // const nameList = nameArr.map( name => <div key={name}>Hello {name}</div>);
    // return <div>{nameList}</div>;

    //== example 5: "Index as key" ==//
    const nameArr = ['Soumili', 'Kunal', 'Tara', 'Manoj', 'Soumili'];
    const nameList = nameArr.map( (name, index)  => <div key={index}>{index}. Hello {name}</div>);
    return <div>{nameList}</div>;
}

export default NameList;
