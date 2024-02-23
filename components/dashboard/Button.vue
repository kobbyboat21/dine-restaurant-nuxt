<script>
  defineProps({
    icon: String,

})

</script>

<template>
  <div>
    <UButton :name="icon"
        size="sm"
        color="black"
        variant="ghost" />
  </div>
</template>
