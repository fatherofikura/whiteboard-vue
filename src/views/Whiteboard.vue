<template>
  <div class="whiteboard">
    <tag-filter />
    <people-list />
    <status-menubar />
  </div>
</template>

<script>
import TagFilter from '@/components/TagFilter'
import PeopleList from '@/components/PeopleList'
import StatusMenubar from '@/components/StatusMenubar'
export default {
  name: 'whiteboard',
  components: {
    TagFilter,
    PeopleList,
    StatusMenubar,
  }
}
</script>
