<template>
  <v-container class="bg-grey-lighten-3 ml-13">
    <p class="text-h4">Projects.</p>

    <br />

    <v-row>
      <v-col cols="4">
        <v-card color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> OpenSourceKe : </v-card-title>

              <v-card-subtitle
                >OpenKe focuses on strengthening ...</v-card-subtitle
              >

              <v-card-actions>
                <v-btn class="ms-2" size="small"> Read More ... </v-btn>
              </v-card-actions>

              <v-card-actions>
                <v-btn
                  color="red"
                  class="ms-2"
                  size="small"
                  append-icon="mdi-github"
                >
                  view Demo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-folder-open</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <!-- <v-col cols="4">
        <v-card color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> Hakiki-Learner </v-card-title>

              <v-card-subtitle
                >OpenKe focuses on strengthening ...</v-card-subtitle
              >

              <v-card-actions>
                <v-btn
                  class="ms-2"
                  variant="outlined"
                  size="small"
                  append-icon="mdi-github"
                >
                  view Demo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-folder-open</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5"> OpenSourceKe </v-card-title>

              <v-card-subtitle
                >OpenKe focuses on strengthening ...</v-card-subtitle
              >

              <v-card-actions>
                <v-btn
                  class="ms-2"
                  variant="outlined"
                  size="small"
                  append-icon="mdi-github"
                >
                  view Demo
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-folder-open</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "MyProjects",
};
</script>

<style>
</style>