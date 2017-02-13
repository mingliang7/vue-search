<template>
    <div class=" cursor-pointer customer-component" @click="viewCustomer(customer._id)">
        <div class="col s3">
            <div class="card">
                <div class="card-content ">
                    <div class="card-title">{{customer.name}}</div>
                    <p>Email: {{customer.email}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            customer: Object
        },
        methods: {
            viewCustomer(val){
                this.$emit('bindCustomer', val)
            }
        }
    }
</script>

<style scoped>
    .cursor-pointer{
        cursor: pointer;
    }    
</style>