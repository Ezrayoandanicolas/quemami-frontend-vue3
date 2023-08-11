<script>
export default {
    name: "Master-Dashboard",
    data() {
        return {
            chartOptions: {
                chart: {
                    id: 'vuechart-example',
                    foreColor: 'grey',
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
                },
                
            },
            series: [{
                name: 'Vue Chart',
                data: [30, 40, 45, 50, 49, 60, 70, 81]
            }]
        }
    },
    methods: {
        updateChart() {
            const max = 90;
            const min = 20;
            const newData = this.series[0].data.map(() => {
                return Math.floor(Math.random() * (max - min + 1)) + min
            })
            // In the same way, update the series option
            this.series = [{
                data: newData
            }]
        }
    }
}
</script>

<template>
    <div class="w-full py-4 px-4 mt-3 text-left bg-white border border-gray-200 rounded-lg shadow dark:text-white dark:bg-gray-800 dark:border-gray-700">
        <div class="container px-6 mx-auto grid">
            <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-white">
                Dashboard
            </h2>

            <div class="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div class="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total Users
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            19238
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div class="p-3 mr-4 text-green-500 bg-green-100 rounded-full">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total Food
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            120
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div class="p-3 mr-4 text-red-500 bg-red-100 rounded-full">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z">
                            </path>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total Bakery
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            6389
                        </p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-white rounded-lg shadow-xs">
                    <div
                        class="p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="8" r="7"></circle>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                        </svg>
                    </div>
                    <div>
                        <p class="mb-2 text-sm font-medium text-gray-600">
                            Total Drink
                        </p>
                        <p class="text-lg font-semibold text-gray-700">
                            828
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-white">
            <apexchart class="w-full dark:text-white text-white" type="line" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>