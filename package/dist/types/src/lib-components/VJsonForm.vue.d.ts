import { Vue } from 'vue-property-decorator';
export default class VJsonForm extends Vue {
    currentValue: any;
    buttonText: string | undefined;
    value: any;
    schema: any;
    isCompleting: boolean | undefined;
    beforeMount(): void;
    input(value: any): any;
    complete(): void;
    completeForm(): any;
}
