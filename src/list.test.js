import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Card from './card';
import renderer from 'react-test-renderer';

const testCards = [{ id: 'a', title: 'First card', content: 'lorem ipsum' },
{ id: 'b', title: 'Second card', content: 'lorem ipsum' },
{ id: 'c', title: 'Third card', content: 'lorem ipsum' },]

describe('list component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<List id='1' header='first list' cards= {testCards}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();  
        });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Card id='a' title='first card' content='lorem ipsum' />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
