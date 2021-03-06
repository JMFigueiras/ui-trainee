import React, {PureComponent} from 'react';
import Table from '../../components/Table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchInstrumentsRequested,
    sortInstrument
} from '../../actions/instrument'

class App extends PureComponent {
    componentDidMount() {
        this.props.getInstruments();
    }

    render() {
        const {instruments, loading, tableProps, onSort} = this.props;
        return (
            <div>
                <Link to="/instrument/edit/new"> Nuevo </Link>
                <hr/>
                <Table {...{data: instruments, ...tableProps, title: 'Instrumentos', onSort: onSort}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {instruments, loading}, tableProps} = state.instrument;
    return {
        tableProps,
        instruments,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getInstruments: () => dispatch(fetchInstrumentsRequested()),
    onSort: sort => dispatch(sortInstrument(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
