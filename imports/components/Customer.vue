<template>
    <div class="customer-component">
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
        }
    }
</script>