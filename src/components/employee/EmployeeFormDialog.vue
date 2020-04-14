<template>
  <v-row justify="center">
    <v-dialog v-model="isActiveAddDialog" persistent max-width="300px">
      <v-card>
        <v-card-title>
          <span class="title">{{ action }} Employee </span>
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form">
            <v-container pt-0>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    color="deep-purple accent-4"
                    label="Name *"
                    v-model="employeeModel.name"
                    :rules="[v => !!v || 'Name is required']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="deep-purple accent-4"
                    label="Last Name *"
                    v-model="employeeModel.lastName"
                    :rules="[v => !!v || 'Last Name is required']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="deep-purple accent-4"
                    label="Email *"
                    v-model="employeeModel.email"
                    :rules="emailRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    color="deep-purple accent-4"
                    label="Phone"
                    v-model="employeeModel.phone"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <small color="red">* indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="close" :disabled="loader">
            Cancel
          </v-btn>
          <v-btn
            color="deep-purple accent-4"
            text
            :disabled="!valid"
            :loading="loader"
            @click="submit(employeeModel)"
          >
            {{ action }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { Employee } from '@/models/employee';

export default {
  data: () => ({
    valid: false,
    isEdit: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapGetters('employee', [
      'employeeModel',
      'isActiveAddDialog',
      'isDialogEditMode',
      'loader',
      'error',
    ]),
    action() {
      return this.isDialogEditMode ? 'Update' : 'Add';
    },
  },
  methods: {
    ...mapActions('employee', [
      'addEmployee',
      'updateEmployee',
      'setEmployeeModel',
      'showAddDialog',
      'setDialogEditMode',
    ]),
    close() {
      this.showAddDialog(false);

      setTimeout(() => {
        this.setDialogEditMode(false);
        this.setEmployeeModel({ ...Employee });
        this.$refs.form.resetValidation();
      }, 500);
    },
    submit(employee) {
      if (!this.isDialogEditMode) {
        this.addEmployee(employee);
      } else {
        this.updateEmployee(employee);
      }

      this.close();
    },
  },
};
</script>
