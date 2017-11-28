import React, { Component } from 'react';

import Order from '../../Components/Order/Order';
import axios from '../../axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import Spinner from "../../UI/Spinner/Spinner";

class Orders extends Component {

    state = {
        orders: [],
        error: false
    };

    componentDidMount(){
        axios.get('/orders.json').then( res => {
            const fetchedOrders = [];

            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
          this.setState({
              orders: fetchedOrders,
          })
        } ).catch( error => {
            this.setState({
                error: error
            })
        })
    }

    render() {

        let orders = <Spinner />;

        if (this.state.orders.length){

            orders = this.state.orders.map( order => {
                return <Order key={ order.id } price={ order.price } ingredients={ order.ingredients } />
            });
        }

        if( this.state.error ){
            orders = <p>Can`t load orders!</p>
        }

        return (
            <div className="orders-list">
                { orders }
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);