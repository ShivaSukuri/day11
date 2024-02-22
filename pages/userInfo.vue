<template>
    <div>
        <table>
            <tr>
                <td>User Id </td>
                <td>: {{ u.id }}</td>
            </tr>
            <tr>
                <td>Name </td>
                <td> :{{ u.name }}</td>
            </tr>
            <tr>
                <td>User email  </td>
                <td>:{{ u.email }}</td>
            </tr>

        </table>
    </div>
</template>

<script setup>
const user=userLogeedIn();
const u=user.value;

    
</script>

<style lang="scss" scoped>

</style>