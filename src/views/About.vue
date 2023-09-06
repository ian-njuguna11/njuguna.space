<template>
  <v-container class="ma-4" rounded="lg">
    <v-container>
      <p class="text-h4 ml-13">About me.</p>

      <p class="ml-13 mt-6">
        Am Ian, Diligent software engineer with more than 3 years' experience in
        server side, mobile and web application development. Eager to join you,
        to build innovative and cutting-edge solutions for existing problems.
        Adept at managing all stages of the software development life-cycle,from
        requirements gathering and feasibility studies to deployment and
        maintenance.Recognized for developing, Kabarak Timetable Generation with
        class Attendance ERP. Proficient with object-oriented programming
        languages,as well as algorithms and data structures.Enjoy collaborating
        with colleagues and building cultures of cross-functional working to
        provide a greater platform for the success of projects.
      </p>
    </v-container>

    <v-container class="mt-4">
      <p class="text-h4 ml-13">
        <v-icon size="32" color="#00C853">mdi-briefcase</v-icon>

        Work Experience.
      </p>

      <p class="ml-13 mt-6">
        Junior Software Dev at Health It Nairobi | February 2021 - June 2023
        Entry level Healthcare | Software & Data - (Contract)
      </p>
    </v-container>

    <v-container class="mt-4">
      <p class="text-h4 ml-13">
        <v-icon size="32" color="#00C853">mdi-school</v-icon>

        Education.
      </p>

      <p class="ml-13 mt-6">
        Bachelor: Bachelor's of Science in Computer Science | May 2017 -
        December 2022
      </p>
    </v-container>

    <v-container class="mt-4">
      <p class="text-h4 ml-13">
        <v-icon color="#00C853" size="32">mdi-lightbulb</v-icon>

        Skills.
      </p>

      <v-row class="ml-13">
        <v-col cols="2">
          <v-list class="bg-grey-lighten-3">
            <v-list-subheader>Frontend</v-list-subheader>
            <v-list-item>
              <v-icon color="#00C853">mdi-tools</v-icon>
              <v-chip class="ma-2" style="text-transform: uppercase">
                flutter
              </v-chip>
            </v-list-item>

            <v-list-item>
              <v-icon color="#00C853">mdi-tools</v-icon>
              <v-chip class="ma-2" style="text-transform: uppercase">
                vue
              </v-chip>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <v-list class="bg-grey-lighten-3">
            <v-list-subheader>Backend</v-list-subheader>

            <v-list-item>
              <v-icon color="#00C853">mdi-tools</v-icon>
              <v-chip class="ma-2" style="text-transform: uppercase">
                Laravel
              </v-chip>
            </v-list-item>
            <v-list-item>
              <v-icon color="#00C853">mdi-tools</v-icon>
              <v-chip class="ma-2" style="text-transform: uppercase">
                SpringBoot
              </v-chip>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style>
</style>

