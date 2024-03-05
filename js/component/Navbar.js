export const navbar = {
    emits: ['navigateTo', 'submit'],
    data: function () {
        return {
        }
    },
    props: {
        id:"",
        label:"",
        link:""
    },
    methods: {
        navigateTo: function(e) {
            e.preventDefault();
            this.$emit("navigateTo",this.link);
          },
    },
    template: '<a :href="link" @click="navigateTo" :id="id">{{label}}</a>'
}