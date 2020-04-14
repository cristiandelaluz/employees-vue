<template>
  <v-app>
    <v-content>
      <navbar />
      <employee-form-dialog />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/shared/Navbar';
import EmployeeFormDialog from '@/components/employee/EmployeeFormDialog';

export default {
  name: 'App',
  components: {
    Navbar,
    EmployeeFormDialog,
  },
};
</script>
