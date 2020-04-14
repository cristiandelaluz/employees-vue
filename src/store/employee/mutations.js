export const mutations = {
  setEmployees: (state, payload) => {
    state.employees = payload;
  },
  addEmployee: (state, payload) => {
    state.employees.push({ ...payload });
  },
  setEmployeeModel: (state, payload) => {
    state.employeeModel = { ...payload };
  },
  updateEmployee: (state, payload) => {
    const employee = state.employees.find(
      employee => employee._id === payload._id,
    );

    Object.assign(employee, payload);
  },
  removeEmployee: (state, payload) => {
    state.employees = state.employees.filter(
      employee => employee._id !== payload._id,
    );
  },
  loading: (state, payload) => {
    state.loader = payload;
  },
  setError: (state, payload) => {
    state.error = payload;
  },
  showAddDialog: (state, payload) => {
    state.isActiveAddDialog = payload;
  },
  enableDialogEditMode: (state, payload) => {
    state.isDialogEditMode = payload;
  },
  setDialogEditMode: (state, payload) => {
    state.isDialogEditMode = payload;
  },
};
