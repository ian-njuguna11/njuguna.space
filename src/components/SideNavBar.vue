<template>
  <v-col class="mt-6" cols="3" sm="1" md="3">
    <v-sheet max-height="80vh" min-width="300px" rounded="lg" class="sidenav">
      <!-- profle picture -->

      <v-container>
        <v-col>
          <v-row>
            <v-avatar class="profile-avatar" size="230">
              <v-avatar
                size="130"
                :color="hoverColor"
                class="bg-transition"
                @mouseover="hoverColor = '#69F0AE'"
                @mouseleave="hoverColor = '#00E676'"
              >
                <v-avatar color="00E676" size="120" class="bg-grey-lighten-3">
                  <v-avatar size="115" color="grey-lighten-3">
                    <v-img
                      alt="Avatar"
                      src="/njuguna.me_prev.png"
                      class="pa-12"
                      :style="{ width: '400px', height: '280px' }"
                    ></v-img>
                  </v-avatar>
                </v-avatar>
              </v-avatar>
            </v-avatar>
          </v-row>
          <v-row>
            <span>
              <p class="font-weight-thin ml-5">
                <span class="font-weight-bold font-weight-black"
                  >Njuguna-Ian
                </span>
                <span class="text-caption">Software Developer</span>
              </p>
            </span>
          </v-row>
        </v-col>
      </v-container>

      <v-list rounded="lg">
        <v-list-item
          v-for="(route, i) in routes"
          :key="i"
          link
          :to="route.path"
          :title="route.alias"
          :class="{ 'active-item': $route.path === route.path }"
        >
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>


<style scoped>
.sidenav {
  position: fixed;
  top: 20;
  left: 150px;
  height: 100%;
  width: 240px; /* Adjust the width as needed */
  background-color: white; /* Set the background color as needed */
  z-index: 100; /* Ensure it's above the content */
  overflow-y: auto; /* Enable vertical scrolling if the content exceeds the sidebar height */
}

.active-item {
  border-right: 3px solid #00c853;
  border-radius: 8px;
}
</style>

<script>
import AboutMe from "../views/AboutMe.vue";
import MyLearning from "../views/MyLearning.vue";
import ReadingList from "../views/ReadingList.vue";

export default {
  name: "SideNavBar",
  data: () => ({
    hoverColor: "#00C853",

    routes: [
      { path: "/", component: AboutMe, alias: "About" },
      { path: "/projects", component: AboutMe, alias: "Projects" },
      {
        path: "/reading-list",
        component: ReadingList,
        alias: "Reading List",
      },
      {
        path: "/my-learning",
        component: MyLearning,
        alias: "What Am Learning?",
      },
    ],
  }),
};
</script>