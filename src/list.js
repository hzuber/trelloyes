import React from 'react';
import Card from './card.js'
import './list.css';

function List(props){
    const {header, cards = []} = props;
    const allTheCards = cards.map((card) => 
        <Card key={card.id} 
            title={card.title} 
            content={card.content}/>)
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{header}</h2>
            </header>
            <div className='List-cards'>
                {allTheCards}
            </div>
            <button
            type='button'
            className='List-add-button'
            >
                + Add Random Card
            </button>
        </section>
    )
}

export default List;