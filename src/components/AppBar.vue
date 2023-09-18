<template>
  <v-app-bar
    flat=""
    rounded="lg"
    :style="{ width: '1650px', margin: '150px' }"
    class="mt-2 mb-2 pa-2"
    color="white"
  >
    <v-icon class="me-4 ml-2">mdi-map-marker-outline</v-icon>
    <span class="text-caption"> Nairobi</span>

    <v-spacer></v-spacer>

    <!-- social media icons -->
    <!-- Social media icons without tooltips -->

    <v-avatar
      size="52"
      :color="hoverColor"
      class="ma-2"
      v-for="(platform, i) in social_platforms"
      :key="i"
    >
      <v-avatar
        size="48"
        :color="platform.bg"
        class="bg-transition"
        @mouseover="social_platforms[i].bg = '#00E676'"
        @mouseleave="social_platforms[i].bg = '#FFFFFF'"
      >
        <a
          href="https://www.instagram.com/your-instagram-profile"
          target="_blank"
        >
          <v-icon size="32">{{ platform.icon }}</v-icon>
        </a>
      </v-avatar>
    </v-avatar>
  </v-app-bar>
</template>


<script>
import AboutMe from "../views/AboutMe.vue";

export default {
  name: "AppBar",
  data: () => ({
    //
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
    routes: [
      { path: "/", component: AboutMe, alias: "About" },
      { path: "/projects", component: AboutMe, alias: "Project" },
    ],
  }),
};
</script>



<style scoped>
.sidenav {
  position: fixed;
  top: 20;
  left: 200px;
  height: 100%;
  width: 240px; /* Adjust the width as needed */
  background-color: white; /* Set the background color as needed */
  z-index: 100; /* Ensure it's above the content */
  overflow-y: auto; /* Enable vertical scrolling if the content exceeds the sidebar height */
}

.active-item {
  border-left: 3px solid #00c853;
}
</style>
