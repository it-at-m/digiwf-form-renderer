
<template>
  <v-app>
    <VJsonRenderer :schema="schema"></VJsonRenderer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";
import {VJsonRenderer} from "@/lib-components";

@Component({
  components: {VJsonRenderer}
})
export default class App extends Vue {

  schema : any = {
    "type": "object",
    "properties": {
      "stepperProp": {
        "type": "object",
        "x-display": "stepper",
        "title": "I'm an object with sections rendered in a stepper.",
        "allOf": [
          {
            "title": "I'm a section",
            "description": "I'm a description shown as a paragraph on top of section",
            "type": "object",
            "required": [
              "stringProp1"
            ],
            "properties": {
              "stringProp1": {
                "type": "string",
                "title": "I'm a required property in section 1"
              }
            }
          },
          {
            "title": "I'm another section",
            "type": "object",
            "required": [
              "stringProp2"
            ],
            "properties": {
              "stringProp2": {
                "type": "string",
                "title": "I'm a required property in section 2"
              }
            }
          }
        ]
      },
      "verticalStepperProp": {
        "type": "object",
        "x-display": "vertical-stepper",
        "title": "I'm an object with sections rendered in a vertical stepper.",
        "allOf": [
          {
            "title": "I'm a section",
            "description": "I'm a description shown as a paragraph on top of section",
            "type": "object",
            "required": [
              "stringProp1"
            ],
            "properties": {
              "stringProp1": {
                "type": "string",
                "title": "I'm a required property in section 1"
              }
            }
          },
          {
            "title": "I'm another section",
            "type": "object",
            "required": [
              "stringProp2"
            ],
            "properties": {
              "stringProp2": {
                "type": "string",
                "title": "I'm a required property in section 2"
              }
            }
          }
        ]
      }
    }
  };

}
</script>

