import './App.css';
import {CustomDropdown} from "./CustomDropdown";
import React, {useState} from "react";
import {Card} from "./Card";
import {Icon} from "./Icon";

function createItem(label, value, iconText) {
    return {
        value,
        label,
        icon: <Icon text={iconText}/>
    };
}

const dinnerItems = [
    createItem('Apple', 'food-apple', '🍎'),
    createItem('Burger', 'food-burger', '🍔'),
    createItem('Pizza', 'food-pizza', '🍕')
];

function App() {
    const [change, setChange] = useState();

    function onChange(event) {
        setChange(event);
    }

    return (
        <div className="App">
            <Card title={<code>{'<CustomDropdown/>'}</code>}>
                <CustomDropdown id="dinner" items={dinnerItems} onChange={onChange}/>
            </Card>

            <Card title={<code>{'onChange(event)'}</code>}>
                <code>
                    <pre>
                        {JSON.stringify(change, null, 2)}
                    </pre>
                </code>
            </Card>
        </div>
    );
}

export default App;
