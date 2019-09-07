import { connect } from "react-redux";
import { combineReducers } from "redux";
import Link from "../components/Link";
import { setFilter } from "../actions";

const mapStateToProps = (state, ownProps) => ({
  active: state.visibleFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  //注意此处用箭头函数定义函数
  onFilterClick: () => dispatch(setFilter(ownProps.filter))
});

const LinkFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default LinkFilter;
