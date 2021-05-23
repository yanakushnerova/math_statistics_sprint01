const content_page = document.getElementById("content_page")
const first_page = document.getElementById("first_page")
const second_page = document.getElementById("second_page")
const third_page = document.getElementById("third_page")

const calculate1 = document.getElementById("task1_calculate")
const calculate2 = document.getElementById("task2_calculate")
const calculate3 = document.getElementById("task3_calculate")

const solution1 = document.getElementById("task1_solution")
const solution2 = document.getElementById("task2_solution")
const solution3 = document.getElementById("task3_solution")

const input_page = document.getElementById("input_page")
const input_page_task2 = document.getElementById("input_page_task2")
const input_page_task3 = document.getElementById("input_page_task3")

const enter_data = document.getElementById("enter_data")
const enter_data_task2 = document.getElementById("enter_data_task2")
const enter_data_task3 = document.getElementById("enter_data_task3")

const default_data = document.getElementById("default_data")
const default_data_task2 = document.getElementById("default_data_task2")
const default_data_task3 = document.getElementById("default_data_task3")

const input_intervals = document.getElementById("input_intervals")
const input_intervals_task2 = document.getElementById("input_intervals_task2")
const input_intervals_task3 = document.getElementById("input_intervals_task3")

let input_sample_1 = []
let input_sample_2 = []
let input_sample_3 = []

const intervals_n = document.getElementById("intervals_n")
const intervals_n_task2 = document.getElementById("intervals_n_task2")
const intervals_n_task3 = document.getElementById("intervals_n_task3")

const level_n = document.getElementById("level_n")
const level_n_task2 = document.getElementById("level_n_task2")
const level_n_task3 = document.getElementById("level_n_task3")

const default_sample = [
    [0.228, 0.248, 6],
    [0.248, 0.268, 16],
    [0.268, 0.288, 21],
    [0.288, 0.308, 36],
    [0.308, 0.328, 42],
    [0.328, 0.348, 32],
    [0.348, 0.368, 22],
    [0.368, 0.38, 12],
    [0.388, 0.408, 8]
]

const default_sample_2 = [
    [0.228, 0.248, 12],
    [0.248, 0.268, 18],
    [0.268, 0.288, 26],
    [0.288, 0.308, 38],
    [0.308, 0.328, 40],
    [0.328, 0.348, 34],
    [0.348, 0.368, 26],
    [0.368, 0.38, 16],
    [0.388, 0.408, 6]
]

document.addEventListener('DOMContentLoaded', function() {
    enter_data.onclick = function() {
        if (document.getElementById("input_table_1")) {
            document.getElementById("input_table_1").remove()
        }

        createInputTable(1, intervals_n.value, default_sample, 1)
    }

    default_data.onclick = function() {
        if (document.getElementById("input_table_1")) {
            document.getElementById("input_table_1").remove()
        }

        createInputTable(2, 9, default_sample, 1)
    }

    enter_data_task2.onclick = function() {
        if (document.getElementById("input_table_2")) {
            document.getElementById("input_table_2").remove()
        }

        createInputTable(1, intervals_n_task2.value, default_sample_2, 2)
    }

    default_data_task2.onclick = function() {
        if (document.getElementById("input_table_2")) {
            document.getElementById("input_table_2").remove()
        }

        createInputTable(2, 9, default_sample_2, 2)
    }

    enter_data_task3.onclick = function() {
        if (document.getElementById("input_table_3")) {
            document.getElementById("input_table_3").remove()
        }

        createInputTable(1, intervals_n_task3.value, default_sample_2, 3)
    }

    default_data_task3.onclick = function() {
        if (document.getElementById("input_table_3")) {
            document.getElementById("input_table_3").remove()
        }

        createInputTable(2, 9, default_sample_2, 3)
    }

    task1_calculate.onclick = function() {
        solution1.innerHTML = ""
        input_sample_1 = parseTable(1)
        intervalSeries(input_sample_1)
        checkHypotesis(input_sample_1)
    }

    task2_calculate.onclick = function() {
        solution2.innerHTML = ""
        input_sample_1 = parseTable(1)
        input_sample_2 = parseTable(2)
        checkHypotesis2(input_sample_1, input_sample_2)
    }

    task3_calculate.onclick = function() {
        solution3.innerHTML = ""
        input_sample_3 = parseTable(3)
    }
});
