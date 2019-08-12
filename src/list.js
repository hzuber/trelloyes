import React from 'react';
import Card from './card.js'
import './list.css';

function List(props){
    const {header, cards = []} = props;
    const allTheCards = cards.map((card, i) => 
        <Card 
            key= {i}
            id={card.id} 
            title={card.title}
            onDeleteCard={props.onDeleteCard}
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
            onClick={() => props.onClickAdd(props.id)}
            >
                + Add Random Card
            </button>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {},
  }

export default List;