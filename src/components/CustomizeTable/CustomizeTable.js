import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../actions/actionTypes';
import * as checkBoxTypes from './checkBoxTypes';

const CustomizeTable = (props) => {
  return (
    <form className="form-control-lg">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="all"
          name={checkBoxTypes.SHOW_ALL}
          checked={props.allChecked}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="all">
          Show All
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="name"
          checked={props.nameChecked}
          name={checkBoxTypes.PRODUCT_NAME}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="name">
          Name
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="description"
          checked={props.descriptionChecked}
          name={checkBoxTypes.PRODUCT_DESCRIPTION}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="description">
          Description
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="manufacturer"
          checked={props.manufacturerChecked}
          name={checkBoxTypes.PRODUCT_MANUFACTURER}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="manufacturer">
          Manufacturer
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="price"
          checked={props.priceChecked}
          name={checkBoxTypes.PRODUCT_PRICE}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="price">
          Price/Unit
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="checkbox"
          id="quantity"
          checked={props.quantityChecked}
          name={checkBoxTypes.PRODUCT_QUANTITY}
          onChange={props.checkBoxHandler}
        />
        <label className="form-check-label" htmlFor="quantity">
          Quantity
        </label>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    allChecked: state.customize.all,
    nameChecked: state.customize.name,
    descriptionChecked: state.customize.description,
    manufacturerChecked: state.customize.manufacturer,
    priceChecked: state.customize.price,
    quantityChecked: state.customize.quantity,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkBoxHandler: (event) => {
      dispatch({
        type: actionTypes.TOGGLE_FIELD,
        checkBoxName: event.target.name,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeTable);
