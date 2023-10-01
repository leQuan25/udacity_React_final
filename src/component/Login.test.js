import {render, fireEvent} from '@testing-library/react';
import * as React from 'react';
import Login from './Login';
import reducer from '../reducer';
import middleware from '../middleware';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

describe('Login', () => {
    it('will match snapshot', () => {
        const store = createStore(reducer, middleware);
        var component = render(<Provider store={store}><Router><Login/></Router></Provider>);
        expect(component).toMatchSnapshot();
    });
});

describe('Login page display items check', () => {
 it('check disable and enable items', () => {
    const store = createStore(reducer, middleware);
        var component = render(<Provider store={store}><Router><Login/></Router></Provider>);
        expect(component.getByTestId('submitButton')).toHaveAttribute('disabled');
        var userName = component.getByTestId('username');
        var password = component.getByTestId('password');
        fireEvent.change(userName, {target: { value: 'userName'}});
        fireEvent.change(password, {target: { value: 'password'}});
        expect(component.getByTestId('submitButton')).toBeEnabled();
 });  
});

