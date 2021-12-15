import './App.css';
import {CustomDropdown} from "./CustomDropdown";
import React, {useState} from "react";
import {Card} from "./Card";

function createItem(label, value) {
    return {
        value,
        label
    };
}

function App() {
    const [change, setChange] = useState();

    const dinnerItems = [
        createItem('Apple', 'food-apple'),
        createItem('Burger', 'food-burger'),
        createItem('Pizza', 'food-pizza'),
    ];

    function onChange(event) {
        setChange(event);
    }

    return (
        <div className="App">
            <OutlinedCard title={<code>{'<CustomDropdown/>'}</code>}>
                <CustomDropdown id="dinner" items={dinnerItems} onChange={onChange}/>
            </OutlinedCard>

            <OutlinedCard title={"onChange(event)"}>
                <code>
                    <pre>
                        {JSON.stringify(change, null, 2)}
                    </pre>
                </code>
            </OutlinedCard>
        </div>
    );
}

export function OutlinedCard({title, children}) {
    return (
        <Card>
            {title}
            <div className="card-content">{children}</div>
        </Card>
    );
}

export default App;
