<script>
export default{
    props: ["items"]
}

</script>

<template>
    <section>
        <table>
            <thead>
                <div>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </div>
            </thead>
            <tbody>
                <tr v-for="(person, index) in items" :key="index">
                    <p v-if="items.length === 0">No items to display</p>
                    <td>{{person.name}}</td>
                    <td>{{ person.email }}</td>
                    <td>{{ person.age }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>