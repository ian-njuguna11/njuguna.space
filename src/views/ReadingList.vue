<template>
  <v-container class="bg-grey-lighten-3">
    <p class="text-h4">Reading List</p>

    <br />

    <v-col cols="12" v-for="(readListItem, index) in readingList" :key="index">
      <v-card
        @mouseover="readingList[index].hidden = false"
        @mouseleave="readingList[index].hidden = !readingList[index].hidden"
        flat
        class="hover-pop"
        color="grey-lighten-3"
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title>
              {{ readListItem.tittle }}

              <v-chip append-icon="mdi-robot" class="ma-2"
                >{{ readListItem.category }}
              </v-chip>

              <v-chip
                color="green"
                :hidden="readListItem.hidden"
                append-icon="mdi-check"
                class="ma-2"
                :href="readListItem.link"
                >Read
              </v-chip>
            </v-card-title>

            <p class="ml-3 text-caption text-grey-darken-3">
              {{ readListItem.description }}
            </p>

            <a :href="readListItem.link" :hidden="readListItem.hidden">
              <v-btn
                append-icon="mdi-open-in-new"
                outlined
                elevation="0"
                class="ma-2"
                size="small"
                color="grey-lighten-2"
              >
                Read More ...
              </v-btn>
            </a>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "ReadingList",
  hidden: true,
  data: () => ({
    hide: true,
    readingList: [
      {
        tittle: " Attention Is All You Need .",
        category: "Deep Learning",
        description:
          "Attention Is All You Need; understanding the inside out the concept of attention mechanism in Transformers.",
        link: "https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf",
        status: "Read",
      },

      {
        tittle:
          "Education in the Era of Generative Artificial Intelligence (AI);.",
        category: "Generative AI",
        description:
          "Understanding the Potential Benefits of GPT(generative pre-trained transformers) in Promoting Teaching and Learning",
        link: "https://deliverypdf.ssrn.com/delivery.php?ID=847004104083009075005099002093122126055092036006058054127081099102096124010086123011039049035031006028001094082026020103088112018007025078012080097091099103097091112018040048024117126127122124117022006071023026065070103073121087092111073068082025106064&EXT=pdf&INDEX=TRUE",
        status: "un-Read",
      },
      {
        tittle: "Andrew Ng: Why AI Is the New Electricity",
        category: "Talks",
        description:
          "Artificial intelligence already powers many of our interactions today. When you ask Siri for directions, peruse Netflix’s recommendations, or get a fraud alert from your bank, these interactions are led by computer systems using large amounts of data to predict your needs.",
        link: "https://www.gsb.stanford.edu/insights/andrew-ng-why-ai-new-electricity",
        status: "un-Read",
      },
    ],
  }),
  created() {
    this.readingList.forEach((item) => {
      item.hidden = true;
    });
  },
};
</script>
<style scoped>
.hover-pop:hover {
  transition: transform 0.2s ease-in-out;
  transform: scale(
    0.95
  ); /* Increase the scale factor for a more pronounced effect */
  box-shadow: 200px;
}
</style>
