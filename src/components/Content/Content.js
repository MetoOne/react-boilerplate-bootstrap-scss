import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { fetchData } from '../../redux/actions';
import icon from '../../assets/react-icon.svg';
import Data from '../Data/Data';
import Spinner from '../Spinner/Spinner';

import './Content.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Content extends React.Component {

  getData = () => {
    this.props.dispatch(fetchData());
  }

  render() {
    const { isFetching, responceData } = this.props;
    return (
      <div className="main-content d-flex flex-column">
        <div className="w-100 d-flex flex-column">
          <img className="react-icon mx-auto" alt="logo" src={icon} />
          <h1 className="text-center">Hello World</h1>
          <button className="fetch-btn py-1 px-4 mx-auto" disabled={isFetching} onClick={() => this.getData()}>get data</button>
          {isFetching ? (
            <Spinner />
          ) :
            (responceData && <Data {...this.props} />)
          }
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  responceData: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    responceData: state.dataReducer.responceData,
    isFetching: state.dataReducer.isFetching,
  })
)(Content);
