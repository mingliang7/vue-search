<template>
    <div class="app-ui">
        <nav>
            <div class="nav-wrapper blue darken-4">
                <form>
                    <div class="input-field">
                        <input id="search" v-model="search" type="search" placeholder="Lookup Customer">
                        <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                        <i class="material-icons">close</i>
                    </div>
                </form>
                <div v-show="busy">
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="row">
            <div v-if="customerExist">
                <div v-show="!busy">
                    <customer-component  v-for="customer in customers" :customer="customer" v-on:bindCustomer="viewCustomer"></customer-component>
                </div>
            </div>
            <div v-else>
                <div v-show="!busy">
                    <div class="container">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-title">
                                    No customer available <a href="#" class="waves-effect waves-light btn">Go Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</template>
</div>
</div>
</template>
<script>
    import CustomerComponent from '/imports/components/Customer.vue';
    export default {
        components: {
            CustomerComponent
        },
        data() {
            return {
                search: '',
                customers: [],
                busy: false
            }
        },
        watch: {
            search(val) {
                this.busy = true;
                this.lookupCustomer();
            }
        },
        computed: {
            customerExist() {
                return this.customers.length > 0;
            }
        },
        methods: {
            lookupCustomer: _.debounce(
                function () {
                    Meteor.call('lookupCustomer', this.search, (err, result) => {
                        if (!err) {
                            this.busy = false;
                            this.customers = result;
                        } else {
                            console.log(err.message);
                            this.busy = false;
                        }
                    });
                },
                500
            ),
            viewCustomer(val){
                this.$router.push({ name: 'viewCustomer', params: { customerId: val }})
            }
        }
    }
</script>
<style scope>
    input {
        background: blue;
        color: white;
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
    
    {
        opacity: 0
    }
</style>