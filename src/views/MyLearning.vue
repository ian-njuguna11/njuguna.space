<template>
  <v-snackbar v-model="snackbar" multi-line color="#69F0AE">
    The Section does not have any published content yet. Please check back
    later.

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>

  <v-container class="bg-grey-lighten-3">
    <p class="text-h4">Learning</p>

    <br />

    <v-row>
      <v-col cols="4">
        <v-card class="hover-pop" color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title> Machine Learning . </v-card-title>

              <p class="ml-3 text-caption text-grey-darken-3">
                Understandin Algorithms in ml Sklearn & Tensorflow...
              </p>

              <v-card-actions>
                <v-btn
                  append-icon="mdi-open-in-new"
                  @click="snackbar = true"
                  class="ms-2"
                  size="small"
                >
                  Read More ...
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-robot</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="hover-pop" color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title> Data Science. </v-card-title>

              <p class="ml-3 text-caption text-grey-darken-3">
                Andrew Ng: "Data is the new fuel" Leverage data for analytics...
              </p>

              <v-card-actions>
                <v-btn
                  @click="snackbar = true"
                  append-icon="mdi-open-in-new"
                  class="ms-2"
                  size="small"
                >
                  Read More ...
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-chart-bar</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card class="hover-pop" color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title> Generative AI. </v-card-title>

              <p class="ml-3 text-caption text-grey-darken-3">
                Deep Dive into Large Language Models, Generative Adersarial
                Networks & Generative Pre-trained Transformers ...
              </p>

              <v-card-actions>
                <v-btn
                  @click="snackbar = true"
                  append-icon="mdi-open-in-new"
                  class="ms-2"
                  size="small"
                >
                  Read More ...
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-lightbulb</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card class="hover-pop" color="#69F0AE">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title> Neural Networks . </v-card-title>

              <p class="ml-3 text-caption" color="grey">
                Perceptron and insane beauty of Neural Networks, the brain
                behind all deep Neural Nets
              </p>

              <v-card-actions>
                <v-btn
                  @click="snackbar = true"
                  append-icon="mdi-open-in-new"
                  class="ms-2"
                  size="small"
                >
                  Read More ...
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" rounded="0">
              <v-icon size="90">mdi-brain</v-icon>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MyLearning",
  data: () => {
    return {
      snackbar: false,
    };
  },
};
</script>
<style scoped>
.hover-pop:hover {
  transition: transform 0.2s ease-in-out;
  transform: scale(
    1.05
  ); /* Increase the scale factor for a more pronounced effect */
  box-shadow: 200px;
}
</style>
