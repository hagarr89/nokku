import {createStore} from "redux";
import reducer from "./reducer";


// Build the middleware for intercepting and dispatching navigation actions

const initialState = {
    reports: [
        {
            name: 'Acquired Users',
            amount: '13,460',
            type: 'NUMBERS',
            color: '#004bb4'

        },
        {
            name: 'ROI',
            amount: '40',
            type: 'PERCENTAGE',
            color: '#fefe99'

        },
        {
            name: 'Product Subscribers ',
            amount: '15,000',
            type: 'NUMBERS',
            color: '#41e250'
        },
        {
            name: 'Communications Open Rate',
            amount: '76',
            type: 'PERCENTAGE',
            background: '#e6b9fa',
            color: '#b01cf2'
        }
    ],
    campaigns: [
        {
            id: 1,
            brand: "Vichy",
            start_date: "12/05/2021",
            end_date: "12/08/2021",
            tag: {
                name: "Active",
                class: "active"
            },
            assign: "Justin Botosh",
            Target_Amount: 100,
        },
        {
            id: 2,
            brand: "Lancome",
            start_date: "12/05/2021",
            end_date: "12/08/2021",
            tag: {
                name: "In Review",
                class: "unactive"
            },
            assign: "Justin Botosh",
            Target_Amount: 100,
        },
        {
            id: 3,
            brand: "La Roche-Posay",
            start_date: "12/05/2021",
            end_date: "12/08/2021",
            tag: {
                name: "Active",
                class: "active"
            },
            assign: "Mira Korsaard",
            Target_Amount: 100,
        },

    ]
}

const store = createStore(reducer, initialState);
export default store;
