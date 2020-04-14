import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { Employee } from '@/models/employee';

const employee = {
  namespaced: true,
  state: {
    employees: [],
    employeeModel: { ...Employee },
    loader: false,
    error: '',
    isActiveAddDialog: false,
    isDialogEditMode: false,
  },
  mutations,
  actions,
  getters,
};

export default employee;
