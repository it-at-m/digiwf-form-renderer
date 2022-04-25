<template>
  <div>
    <v-form
        ref="form">
      <v-json-renderer :options="options" @input="input" :value="currentValue" :schema="schema">
        <template v-for="(index, name) in $scopedSlots" v-slot:[name]="data">
          <slot :name="name" v-bind="data"></slot>
        </template>
      </v-json-renderer>
      <v-flex class="d-flex" style="width: 100%">
        <v-spacer/>
        <v-btn
            class="mt-5"
            color="primary"
            :disabled="isCompleting"
            @click="complete">
          {{ buttonText || "Abschließen" }}
        </v-btn>
      </v-flex>
    </v-form>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {VJsonRenderer} from "@/lib-components/index";

@Component({
  name: "v-json-form",
  components: {VJsonRenderer}
})
export default class VJsonForm extends Vue {

  currentValue: any = {};

  @Prop()
  options: any;

  @Prop()
  buttonText: string | undefined;

  @Prop()
  value: any;

  @Prop()
  schema: any;

  @Prop()
  isCompleting: boolean | undefined;

  beforeMount(): void {
    this.currentValue = this.value;
  }

  @Emit("input")
  input(value: any): any {
    this.currentValue = value;
    return value;
  }

  complete(): void {
    if ((this.$refs.form as HTMLFormElement).validate()) {
      this.completeForm();
    }
  }

  @Emit("complete-form")
  completeForm(): any {
    return this.currentValue;
  }

}
</script>

