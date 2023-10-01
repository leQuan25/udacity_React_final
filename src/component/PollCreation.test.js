import {render, fireEvent} from '@testing-library/react';
import * as React from 'react';
import PollCreation from './PollCreation';
import reducer from '../reducer';
import middleware from '../middleware';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

describe('Poll Creation', () => {
    it('will match snapshot', () => {
        const store = createStore(reducer, middleware);
        var component = render(<Provider store={store}><Router><PollCreation/></Router></Provider>);
        expect(component).toMatchSnapshot();
    });
});

describe('Poll Creation page display items check', () => {
 it('check disable and enable items', () => {
    const store = createStore(reducer, middleware);
        var component = render(<Provider store={store}><Router><PollCreation/></Router></Provider>);
        expect(component.getByTestId('submitButton')).toHaveAttribute('disabled');
        var optionOne = component.getByTestId('optionOne');
        var optionTwo = component.getByTestId('optionTwo');
        fireEvent.change(optionOne, {target: { value: 'optionOne'}});
        fireEvent.change(optionTwo, {target: { value: 'optionTwo'}});
        expect(component.getByTestId('submitButton')).toBeEnabled();
 });  
});
