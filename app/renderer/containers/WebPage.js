import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import WebPageView from '../components/WebPageView';


const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(WebPageView);
