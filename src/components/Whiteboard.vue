<template>
  <div class="whiteboard">
    <menubar />
    <tag-filter />
    <people-list />
  </div>
</template>

<script>
import Menubar from './Menubar'
import TagFilter from './TagFilter'
import PeopleList from './PeopleList'
export default {
  name: 'whiteboard',
  components: {
    Menubar,
    TagFilter,
    PeopleList,
  }
}
</script>
