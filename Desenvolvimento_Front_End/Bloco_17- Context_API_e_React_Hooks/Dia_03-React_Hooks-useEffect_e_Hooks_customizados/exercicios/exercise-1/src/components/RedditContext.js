import React, { createContext, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider } = Context;

function RedditProvider({ children }) {
  const [postsBySubreddit, setPostsBySubreddit] = useState({
        frontend: {},
        reactjs: {},
  });
  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');
  const prevSelectedSubreddit = useRef('reactjs');
  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;
    setShouldRefreshSubreddit(false);
    setIsFetching(true);

    getPostsBySubreddit(selectedSubreddit)
      .then(handleFetchSuccess, handleFetchError);
  }

  useEffect(() => {
    const selectedSubredditChanged = 
      prevSelectedSubreddit.current !== selectedSubreddit;

    if (selectedSubredditChanged || shouldRefreshSubreddit) {
      fetchPosts();
      prevSelectedSubreddit.current = selectedSubreddit;
    }
  }, [fetchPosts, selectedSubreddit, shouldRefreshSubreddit]);

  const shouldFetchPosts = () => {
    if (isFetching) return false;
    if (shouldRefreshSubreddit) return true;
    return true;
  }

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setIsFetching(false);
    setPostsBySubreddit((prev) => ({
      ...prev,
      [selectedSubreddit]: { items, lastUpdated },
    }));
  }

  const handleFetchError = (error) => {
    setIsFetching(false);
    setPostsBySubreddit((prev) => ({
      ...prev,
      [selectedSubreddit]: { error: error.message, items: [] },
    }));
  }

  const handleSubredditChange = (selectedSubreddit) => {
   setSelectedSubreddit(selectedSubreddit);
  };

  const handleRefreshSubreddit = () => {
   setShouldRefreshSubreddit(true);
  }

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    shouldRefreshSubreddit,
    isFetching,
    selectSubreddit: handleSubredditChange,
    setShouldRefreshSubreddit,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return (
    <Provider value={context}>
      {children}
    </Provider>
  );
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Context };