import React, { Component } from 'react';
import PropTypes from 'prop-types';

interface AppProps {
  age: number;
}

interface AppState {
  name: string;
}

interface AppPropTypes {
  age: number;
}

export default class App extends Component<AppProps, AppState> {
  static propTypes: AppPropTypes;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: 'wp',
    };
  }

  render(): React.ReactNode {
    const { name } = this.state;
    const { age } = this.props;
    return (
      <div>
        <div>姓名：{name}</div>
        <div>年龄：{age}</div>
      </div>
    );
  }
}

// App.defaultProps = {
//   age: 29,
// };

App.propTypes = {
  age: PropTypes.number.isRequired,
};
