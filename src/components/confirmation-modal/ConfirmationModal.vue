<template>
<sui-grid-column centered>
 <sui-step-group ordered>
      <sui-step completed>
        <sui-step-content>
          <sui-step-title>Morgon</sui-step-title>
          <sui-step-description>Choose your shipping options</sui-step-description>
        </sui-step-content>
      </sui-step>

      <sui-step active title="Dag" description="Ditt mätvärde..." />

      <sui-step active title="Kväll" description="Verify order details" />
    </sui-step-group>
</sui-grid-column>
    
</template>

<script>
export default {
  name: 'ConfirmationModal',
  data: () => ({
      isOpen: true
  }),
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        text-align: left;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>
