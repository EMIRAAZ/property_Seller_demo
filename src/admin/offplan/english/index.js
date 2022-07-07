import { connect } from 'react-redux';
import Offplan from './Offplan';
import { getAdminOffplan, deleteAdminOffplan } from '../../../redux/actions';

const mapStateToProps = state => {
  return {
    adminOffplan: state.adminoffplanReducer.adminOffplan,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAdminOffplan: params => dispatch(getAdminOffplan(params)),
    deleteAdminOffplan: (id, cb) => dispatch(deleteAdminOffplan(id, cb)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Offplan);
