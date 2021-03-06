import React, {PureComponent} from 'react';
import Table from '../../components/Table';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {
    fetchCarsRequested,
    sortCar
} from '../../actions/car'

class App extends PureComponent {
    componentDidMount() {
        this.props.getCars();
    }

    render() {
        const {cars, loading, tableProps, onSort} = this.props;
        return (
            <div>
                <Link to="/car/edit/new"> Nuevo </Link>
                <hr/>
                <Table {...{data: cars, ...tableProps, title: 'Autos', onSort: onSort}}/>
            </div>
        )
    }
}

const mapStateToProps = (state /* nuestro Store */, ownProps /*  */ ) => {
    const {documents: {cars, loading}, tableProps} = state.car;
    return {
        tableProps,
        cars,
        loading
    };
}

const mapDispatchToProps = (dispatch /* acciones a disparar */, ownProps /*  */ ) => ({
    getCars: () => dispatch(fetchCarsRequested()),
    onSort: sort => dispatch(sortCar(sort))
})

export default connect(
    mapStateToProps, // MaspStateToProps 1
    mapDispatchToProps // MapDispatchToProps 2
    // MergeProps <<<<<  1 + 2 = 3
)(App);
