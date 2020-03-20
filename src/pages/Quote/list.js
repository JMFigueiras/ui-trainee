import React, {PureComponent} from 'react';
import Table from '../../components/Table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchQuotesRequested,
    sortQuote
} from '../../actions/quote'

class App extends PureComponent {
    componentDidMount() {
        this.props.getQuotes();
    }

    render() {
        const {quotes, loading, tableProps, onSort} = this.props;
        return (
            <div>
                <Link to="/quote/edit/new"> Nuevo </Link>
                <hr/>
                <Table {...{data: quotes, ...tableProps, title: 'Quotes', onSort: onSort}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {quotes, loading}, tableProps} = state.quote;
    return {
        tableProps,
        quotes,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getQuotes: () => dispatch(fetchQuotesRequested()),
    onSort: sort => dispatch(sortQuote(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
