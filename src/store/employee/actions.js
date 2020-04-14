import { Http } from '@/helpers/axios';
import { isSuccessResponse } from '@/helpers/utils';

export const actions = {
  fetchEmployees: async ({ commit }) => {
    commit('loading', true);

    try {
      const response = await Http.get('/employee');
      const { status, data } = response;
      if (isSuccessResponse(status)) {
        commit('setEmployees', data);
      }
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('loading', false);
    }
  },
  addEmployee: async ({ commit }, payload) => {
    commit('loading', true);

    try {
      const response = await Http.post('/employee', payload);
      const { status, data } = response;
      if (isSuccessResponse(status)) {
        commit('addEmployee', data);
      }
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('loading', false);
    }
  },
  setEmployeeModel: ({ commit }, payload) => {
    commit('setEmployeeModel', payload);
  },
  updateEmployee: async ({ commit }, payload) => {
    commit('loading', true);

    try {
      const response = await Http.put('/employee', payload);
      const { status, data } = response;

      if (isSuccessResponse(status)) {
        commit('updateEmployee', data);
      }
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('loading', false);
    }
  },
  removeEmployee: async ({ commit }, payload) => {
    commit('loading', true);

    try {
      const response = await Http.delete(`/employee/${payload}`);
      const { status, data } = response;

      if (isSuccessResponse(status)) {
        commit('removeEmployee', data);
      }
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('loading', false);
    }
  },
  showAddDialog: ({ commit }, payload) => {
    commit('showAddDialog', payload);
  },
  setDialogEditMode: ({ commit }, payload) => {
    commit('setDialogEditMode', payload);
  },
};
