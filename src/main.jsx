import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from "./constants/mock.js";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <div>
        <div>
            <h1>{restaurants[0].name}</h1>
            <h2>Меню:</h2>
            <ul>
                <li>{restaurants[0].menu[0].name}</li>
                <li>{restaurants[0].menu[1].name}</li>
                <li>{restaurants[0].menu[2].name}</li>
            </ul>
            <h2>Отзывы.</h2>
            <ul>
                <li>{restaurants[0].reviews[0].text}</li>
                <li>{restaurants[0].reviews[1].text}</li>
            </ul>
        </div>
        <hr />

        <div>
            <h1>{restaurants[1].name}</h1>
            <h2>Меню:</h2>
            <ul>
                <li>{restaurants[1].menu[0].name}</li>
                <li>{restaurants[1].menu[1].name}</li>
            </ul>
            <h2>Отзывы.</h2>
            <ul>
                <li>{restaurants[1].reviews[0].text}</li>
                <li>{restaurants[1].reviews[1].text}</li>
                <li>{restaurants[1].reviews[2].text}</li>
            </ul>
        </div>
        <hr />

        <div>
            <h1>{restaurants[2].name}</h1>
            <h2>Меню:</h2>
            <ul>
                <li>{restaurants[2].menu[0].name}</li>
                <li>{restaurants[2].menu[1].name}</li>
                <li>{restaurants[2].menu[2].name}</li>
            </ul>
            <h2>Отзывы.</h2>
            <ul>
                <li>{restaurants[2].reviews[0].text}</li>
            </ul>
        </div>
        <hr />

        <div>
            <h1>{restaurants[3].name}</h1>
            <h2>Меню:</h2>
            <ul>
                <li>{restaurants[3].menu[0].name}</li>
                <li>{restaurants[3].menu[1].name}</li>
            </ul>
            <h2>Отзывы.</h2>
            <ul>
                <li>{restaurants[3].reviews[0].text}</li>
                <li>{restaurants[3].reviews[1].text}</li>
            </ul>
        </div>
        <hr />
    </div>
);
