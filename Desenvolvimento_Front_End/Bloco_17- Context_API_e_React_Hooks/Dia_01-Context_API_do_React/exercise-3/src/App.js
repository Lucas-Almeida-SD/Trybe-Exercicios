// src/App.js
import React, { Component } from 'react';
import Posts from './components/Posts';
import Selector from './components/Selector';
import MyContext from './MyContext';

class App extends Component {
  renderLastUpdatedAt(lastUpdated) {
    return <span>{`Last updated at ${new Date(lastUpdated).toLocaleTimeString()}.`}</span>;
  }

  renderRefreshButton(isFetching) {
    const { handleRefreshClick } = this.context;
    return (
      <button
        type="button"
        onClick={(event) => handleRefreshClick(event)}
        disabled={isFetching}
      >
        Refresh
      </button>
    );
  }

  render() {
    const {  selectedSubreddit, postsBySubreddit } = this.context;
    const { isFetching, lastUpdated, items: posts = [] } = 
      postsBySubreddit[selectedSubreddit];
    
    const isEmpty = posts.length === 0;

    return (
        <div>
          <Selector />
          <div>
            {lastUpdated && this.renderLastUpdatedAt(lastUpdated)}
            {this.renderRefreshButton(isFetching)}
          </div>
          {isFetching && <h2>Loading...</h2>}
          {!isFetching && isEmpty && <h2>Empty.</h2>}
          {!isFetching && !isEmpty && <Posts posts={posts} />}
        </div>
    );
  }
}

App.contextType = MyContext;

export default App;
