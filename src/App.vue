<template>
  <v-app>
    <v-container
      :visible="true"
      class="center-vertically"
      v-if="isLoading"
      align="center"
    >
      <v-col align-self="center">
        <InitialLoader />
        <h5>Loading ...</h5>
      </v-col>
    </v-container>
    <v-main v-else class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-card class="">
            <AppBar />
          </v-card>

          <SideNavBar class="mt-6" />

          <v-col class="bg-grey-lighten-3">
            <v-main>
              <router-view />
            </v-main>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import InitialLoader from "@/views/InitialLoader.vue";
import AppBar from "./components/AppBar.vue";

import SideNavBar from "./components/SideNavBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    SideNavBar,
    InitialLoader,
  },

  data: () => ({
    //
    isLoading: true,
    hoverColor: "#00C853",
    social_platforms: [
      {
        instagram: "https://www.instagram.com/your-instagram-profile",
        icon: "mdi-instagram",
        bg: "#FFFFFF",
        hovered: false,
      },
      {
        facebook: "https://www.facebook.com/your-facebook-profile",
        icon: "mdi-facebook",
        bg: "#FFFFFF",
        hovered: false,
      },
      {
        twitter: "https://www.twitter.com/your-twitter-profile",
        icon: "mdi-twitter",
        bg: "#FFFFFF",
        hovered: false,
      },
    ],
  }),

  created() {
    // Simulate content loading (replace this with your actual loading logic)
    setTimeout(() => {
      this.isLoading = false; // Set isLoading to false when content is loaded
    }, 4500); // Simulate a 3-second loading time
  },
};
</script>

<style>
.center-vertically {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  min-height: 100vh; /* Ensure the container takes the full height of the viewport */
}
</style>
