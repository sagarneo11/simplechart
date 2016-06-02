import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataInput from './DataInput';
import ChartTypeSelector from './ChartTypeSelector';
// import ChartBuilder from './ChartBuilder';

class App extends Component {

  constructor() {
    super();
    this._renderChartTypeSelector = this._renderChartTypeSelector.bind(this);
  }

  _renderChartTypeSelector() {
    if (this.props.state.dataStatus.status !== 'success') {
      return '';
    }
    return (
      <ChartTypeSelector
        data={this.props.state.parsedData}
        fields={this.props.state.dataFields}
      />
    );
  }

  render() {
    return (
      <div>
        <DataInput
          rawData={this.props.state.rawData}
          dataStatus={this.props.state.dataStatus}
        />
        {this._renderChartTypeSelector()}
      </div>
    );
  }
}

App.propTypes = {
  state: React.PropTypes.object,
};

// Which props to inject from the global atomic state
export default connect((state) =>
  ({ state })
)(App);
