import * as React from 'react';
import * as ReactDOM from 'react-dom';

import styles from './app.module.less';
import Button from './components/form/Button';

const App = () => {
  return (
    <div className={styles.hello}>
      hello<p className={styles.world}>world</p>
      <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// export { default as Button } from './components/form/Button';
