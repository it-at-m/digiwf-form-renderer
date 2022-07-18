<template>
  <div>
    <v-jsf @input="input" v-model="currentValue" :schema="currentSchema" :options="currentOptions">
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
import deepmerge from 'deepmerge'

@Component({
  name: 'v-json-renderer',
  components: {VJsf}
})
export default class VJsonRenderer extends Vue {

  currentValue: any = {};
  defaultOptions = {
    "editMode": "inline",
    "disableSorting": true,
    "sectionsClass": "pl-0 col-12 pb-0 pt-0 pr-0",
    "objectContainerClass": "pl-0 pb-0 pt-0 pr-0",
    "timePickerProps": {
      "format": "24hr"
    },
    "messages": {
      "required": "Dieses Feld ist ein Pflichfeld",
      "preview": "Vorschau",
      "mdeGuide": "Dokumentation"
    },
  };
  formats = {
    "time": function (e: any, t: any) {
      const r = new Date("".concat((new Date).toISOString().split("T")[0], "T").concat(e));
      return new Date(r.getTime() + 6e4 * r.getTimezoneOffset()).toLocaleTimeString(t)
    }
  }
  rules = {
    required: function (v: any) {
      return (!!v && v !== '') || 'Dieses Feld ist ein Pflichfeld';
    },
    requiredObject: function (v: { amount: number }) {
      return (!!v && v.amount < 1) || 'Dieses Feld ist ein Pflichfeld';
    }
  };

  get currentOptions(): any {
    return {
      rules: this.rules,
      formats: this.formats,
      ...deepmerge(this.defaultOptions, this.options!),
    }
  }

  get currentSchema(): any {
    if (this.options && this.options.readOnly) {
      return {
        ...this.schema,
        readOnly: true
      }
    }
    return this.schema
  }

  @Prop()
  options: any;

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

.v-input--is-disabled:not(.v-input--is-readonly) a {
  pointer-events: all !important;
}

.read-only .v-card__text {
  color: black !important;
}

.read-only fieldset {
  background: rgb(245, 245, 245);
}

.v-input {
  margin-right: 10px !important;
}

.read-only .v-label {
  color: #222 !important;
  font-size: 16px !important;
}

.vjsf-property > .v-input--hide-details {
  margin-bottom: 15px !important;
}

.read-only > .v-text-field.v-text-field--enclosed {
  margin-bottom: 15px !important;
}

.read-only > .row > .v-text-field.v-text-field--enclosed {
  margin-bottom: 15px !important;
}

.vjsf-property > .row:last-child > .col > .v-card {
  margin-bottom: 20px !important;
}

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: white !important;
}

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot:hover {
  background-color: white !important;
}

</style>
