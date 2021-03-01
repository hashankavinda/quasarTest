<template>
  <q-page class="q-pa-lg bg-grey-4">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    > -->
    <h4 class="q-mt-none q-mb-none">Inbox</h4>

    <q-btn-group>
      <q-btn color="secondary" glossy label="Select all" @click="task.first=!task.first; task.second=!task.second" />
      <q-btn color="secondary" glossy label="Mark as read" />
      <q-btn color="secondary" glossy label="Refresh" />
      <q-btn color="secondary" glossy label="More" />
    </q-btn-group>

    <q-list bordered class="rounded-borders q-pa-md" style="100%">
      <!-- <q-item-label header>Google Inbox style</q-item-label> -->

      <q-item>
        <q-item-section avatar top>
          <q-icon name="assignment" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Hashan</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium"><a href="https://www.linkedin.com/in/hashankavinda/" target="_blank">Contact me</a></span>
            <span class="text-grey-8"> - LinkedIn</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @hashankavinda
          </q-item-label>
          <!-- <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Open in another window</span>
          </q-item-label> -->
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-checkbox v-model="task.first" color="secondary" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item>
        <q-item-section avatar top>
          <q-icon name="assignment" color="black" size="34px" />
        </q-item-section>

        <q-item-section top class="col-2 gt-sm">
          <q-item-label class="q-mt-sm">Kavinda</q-item-label>
        </q-item-section>

        <q-item-section top>
          <q-item-label lines="1">
            <span class="text-weight-medium"><a href="https://www.facebook.com/dhkavinda/" target="_blank">Contact me</a></span>
            <span class="text-grey-8"> - Facebook</span>
          </q-item-label>
          <q-item-label caption lines="1">
            @dhkavinda
          </q-item-label>
          <!-- <q-item-label lines="1" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <span class="cursor-pointer">Open in GitHub</span>
          </q-item-label> -->
        </q-item-section>

        <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
            <q-checkbox v-model="task.second" color="secondary" />
            <q-btn size="12px" flat dense round icon="more_vert" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  // name: 'PageIndex'
  data(){
    return{
      task:
        {
          first: false,
          second: false
        }
    }
  }
}
</script>
