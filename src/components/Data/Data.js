import React from 'react';
import { PropTypes } from 'prop-types';
import './Data.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Data extends React.Component {

  render() {
    const { responceData } = this.props;
    return (
      <div className="items mx-auto col-md-6 col-xs-12">
        {responceData && responceData.map((data, i) => {
          const href = `mailo:${data.email}`;
          return (
            <div className="item py-2" key={data.id + i}>
              <h4>{data.name}</h4>
              <a className="d-block" href={href}>{data.email}</a>
              <i>{data.body}</i>
            </div>
          );
        })}
      </div>
    );
  }
}

Data.propTypes = {
  responceData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Data;
