import {render} from '@testing-library/react';
import PageNotFound from './PageNotFound';
import reducer from '../reducer';
import middleware from '../middleware';
import {legacy_createStore as createStore} from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

describe('PageNotFound', () => {
    it('will match snapshot', () => {
        const store = createStore(reducer, middleware);
        var component = render(<Provider store={store}><Router><PageNotFound /></Router></Provider>);
        expect(component).toMatchSnapshot();
        expect(component.getByText('404 Page not found')).toBeInTheDocument();
    });
});