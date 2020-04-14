<template>
  <v-container>
    <v-card flat>
      <v-card-title>
        All Employees
        <v-spacer></v-spacer>
        <v-text-field
          color="deep-purple accent-4"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn text @click="$store.dispatch('employee/showAddDialog', true)">
          Add new employee
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="employees"
        :search="search"
        :loading="loader"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="edit(item)">
            mdi-pencil
          </v-icon>
          <v-icon small color="red" @click="remove(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <h3>No data</h3>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { employeesHeader } from '@/constants/tableHeaders';

export default {
  data() {
    return {
      search: '',
      headers: employeesHeader,
    };
  },
  created() {
    this.fetchEmployees();
  },
  computed: {
    ...mapGetters('employee', ['employees', 'loader']),
  },
  methods: {
    ...mapActions('employee', [
      'fetchEmployees',
      'removeEmployee',
      'setEmployeeModel',
      'showAddDialog',
      'setDialogEditMode',
    ]),
    edit(employee) {
      this.setDialogEditMode(true);
      this.setEmployeeModel(employee);
      this.showAddDialog(true);
    },
    remove(employee) {
      this.removeEmployee(employee._id);
    },
  },
};
</script>
