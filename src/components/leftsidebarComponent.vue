<template>
    <div class="col-3">
        <ul style="list-style-type: none;background-color:#2C3E50 " class="border rounded shadow-lg">
            <li>
                <appLink to="/"> Dashboard</appLink>
            </li>
            <li>
                <appLink :to="{name:'invoice'}"> Invoices</appLink>
            </li>
        </ul>
    </div>
</template>