<template>
    <div class="view-customer">
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <div class="card-title"><b>{{customer.name}} </b>
                         <span class="right">
                         <router-link :to="{name: 'home'}"> <i class="material-icons">home
                         </i></router-link>
                         </span>
                    </div>
                    <p>Email: {{customer.email}}</p>
                    <p>{{customer.paragraph}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                customer: {}
            }
        },
        mounted(){
            Meteor.call('fetchCustomer', this.$route.params.customerId, (err,result)=>{
                if(!err){
                    this.customer = result;
                }
            });
        }
     }
</script>