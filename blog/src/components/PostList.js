import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {

  state = {
    initialState : this.props.initialState
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  render = () => {
    console.log(this.props.initialState);
    return <div>{this.props.initialState}</div>
  }
}

const mapStateToProps = state => {
  return {
    initialState : state.initialState
  };
}

const mapActionsToProps = () => {
  return {
    fetchPosts : fetchPosts,
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PostList);




// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { IGlobalState } from '../reducers';
// import { IGlobalActions } from '../actions';
// import { IFetchPostReturn } from '../actions';
// import { fetchPosts } from '../actions';

// interface IPostListProps {
//   fetchPosts: () => IFetchPostReturn
// }

// class PostList extends Component<IGlobalState> {

//   public readonly state: IGlobalState = {
//     initialState : this.props.initialState
//   }

//   componentDidMount = ():void => {
//     this.props.fetchPosts();
//   }

//   render = () => {
//     console.log(this.props.initialState);
//     return <div>{this.props.initialState}</div>
//   }
// }

// const mapStateToProps = (state:IGlobalState) => {
//   return {
//     initialState : state.initialState
//   };
// }

// export default connect(mapStateToProps,{
//   fetchPosts
// })(PostList);

