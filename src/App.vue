<template>
  <v-app>
    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-card class="">
            <v-app-bar
              flat=""
              rounded="lg"
              :style="{ width: '1650px', margin: '200px' }"
              class="mt-2 mb-2 pa-2"
              color="white"
            >
              <v-app-bar-title>
                <v-avatar
                  class="me-4"
                  :color="hoverColor"
                  @mouseover="hoverColor = '#69F0AE'"
                  mouseleave="hoverColor = '#00E676'"
                  size="52"
                >
                  <v-img
                    alt="Avatar"
                    src="/njuguna.me_prev.png"
                    class="pa-12"
                  ></v-img>
                </v-avatar>

                <v-icon class="ml-2">mdi-map-marker-outline</v-icon>
                <span class="text-caption"> Nairobi</span>
              </v-app-bar-title>

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
          </v-card>

          <v-col class="mt-6" cols="3" sm="1" md="3">
            <v-sheet
              max-height="80vh"
              min-width="300px"
              rounded="lg"
              class="sidenav"
            >
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
                        <v-avatar
                          color="00E676"
                          size="120"
                          class="bg-grey-lighten-3"
                        >
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
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

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

<script>
import AboutMe from "./views/About.vue";
export default {
  name: "App",

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
