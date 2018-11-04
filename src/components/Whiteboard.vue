<template>
  <div class="whiteboard">
    <menubar />
    <tag-filter />
    <people-list />
    <status-menubar />
  </div>
</template>

<script>
import Menubar from './Menubar'
import TagFilter from './TagFilter'
import PeopleList from './PeopleList'
import StatusMenubar from './StatusMenubar'
export default {
  name: 'whiteboard',
  components: {
    Menubar,
    TagFilter,
    PeopleList,
    StatusMenubar,
  }
}
</script>
