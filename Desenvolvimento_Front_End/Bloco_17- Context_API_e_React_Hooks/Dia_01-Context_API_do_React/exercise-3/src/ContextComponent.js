import React from 'react';
import MyContext from './MyContext';

class ContextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postsBySubreddit: {
        reactjs: { 
          shouldRefreshSubreddit: false,
          isFetching: false,
          items: [],
          lastUpdated: null,
          error: null,
        },
        frontend: { 
          shouldRefreshSubreddit: false,
          isFetching: false,
          items: [],
          lastUpdated: null,
          error: null,
        },
      },
      selectedSubreddit: 'reactjs',
    }
  }

  componentDidMount() {
    this.getPostsBySubreddit();
  }

  // componentDidUpdate(prevProps) {
  //   const { selectedSubreddit } = this.state;

  //   if (prevProps.selectedSubreddit !== selectedSubreddit) {
  //     this.getPostsBySubreddit();
  //   }
  // }

  handleRefreshClick = (event) => {
    event.preventDefault();
    this.getPostsBySubreddit();
  }

  successFetch = (subreddit, data) => {
    this.setState( (prevState) => ({
      ...prevState,
      postsBySubreddit: {
        ...prevState.postsBySubreddit,
        [subreddit]: { 
          ...prevState.postsBySubreddit[subreddit],
          shouldRefreshSubreddit: false,
          items: data.data.children.map((child) => child.data),
          isFetching: false,
          lastUpdated: Date.now(),
          error: null,
        }
      }
    }))
  }

  failureFetch = (subreddit) => {
    this.setState((prevState) => ({
      ...prevState,
      postsBySubreddit: { 
        ...prevState.postsBySubreddit,
        [subreddit]: {
          ...prevState.postsBySubreddit[subreddit],
          shouldRefreshSubreddit: false,
          items: [],
          error: 'erro',
          isFetching: false,
        }
      } 
    }));
  }

  getPostsBySubreddit = () => {
    const { selectedSubreddit: subreddit } = this.state;
    this.setState( (prevState) => (
      {
        ...prevState,
        postsBySubreddit: { 
          ...prevState.postsBySubreddit,
          [subreddit]: { ...prevState.postsBySubreddit[subreddit], isFetching: true },
        }
      }), () => {
        const SUBREDDIT_BASE_API = 'https://www.reddit.com';
        fetch(`${SUBREDDIT_BASE_API}/r/${subreddit}.json`)
        .then((response) => response.json())
        .then((data) => this.successFetch(subreddit, data))
        .catch(() => this.failureFetch(subreddit))
      });
  }

  selectSubreddit = (nextSubreddit) => {
    this.setState({ selectedSubreddit: nextSubreddit }, () => this.getPostsBySubreddit());
  }

  render() {
    const { children } = this.props;
    const { postsBySubreddit, selectedSubreddit } = this.state;
    const { selectSubreddit, handleRefreshClick } = this;
    const contextValue = {
      postsBySubreddit, selectedSubreddit, selectSubreddit, handleRefreshClick,
    };
    return (
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    );
  }
}

export default ContextComponent;
