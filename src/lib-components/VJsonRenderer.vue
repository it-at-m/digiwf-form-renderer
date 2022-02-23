<template>
  <div>
    <v-jsf @input="input" v-model="currentValue" :schema="schema" :options="options">
      <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
        <slot :name="name" v-bind="data"></slot>
      </template>
    </v-jsf>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import VJsf from '@koumoul/vjsf/lib/VJsf.js';
import '@koumoul/vjsf/lib/VJsf.css';
import '@koumoul/vjsf/lib/deps/third-party.js';
import '@koumoul/vjsf/dist/main.css';

@Component({
  name: 'v-json-renderer',
  components: {VJsf}
})
export default class VJsonRenderer extends Vue {

  currentValue: any = {};
  options = {
    "locale": "de",
    "editMode": "inline",
    "disableSorting": true,
    "sectionsClass": "pl-1 col-12 pb-0 pt-0",
    "objectContainerClass": "pl-0 pb-0 pt-0",
    "messages": {
      "required": "Dieses Feld ist ein Pflichfeld"
    },
    rules: {
      required: function (v: any) {
        return (!!v && v !== '') || 'Dieses Feld ist ein Pflichfeld';
      }
    },
  }

  @Prop()
  buttonText: string | undefined;

  @Prop()
  value: any;

  @Prop()
  schema: any;

  beforeMount(): void {
    this.currentValue = this.value;
  }

  @Emit("input")
  input(): any {
    return this.currentValue;
  }

}
</script>

<style>

.vjsf-property > .v-input--hide-details {
  margin-bottom: 15px !important;
}

.vjsf-property > .row:last-child {
  margin-bottom: 15px !important;
}

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: white !important;
}

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot:hover {
  background-color: white !important;
}

</style>
