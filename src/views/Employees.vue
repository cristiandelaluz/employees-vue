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
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Id',
          sortable: false,
          value: 'id',
        },
        { text: 'Matricule', value: 'matricule' },
        { text: 'Name', value: 'name' },
        { text: 'Last name', value: 'lastName' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
      ],
      desserts: [
        {
          id: 1,
          matricule: '123456',
          name: 'Cristian',
          lastName: 'De La Luz',
          email: 'cristhian.oh16@gmail.com',
          phone: '0667529730',
        },
      ],
    };
  },
};
</script>
