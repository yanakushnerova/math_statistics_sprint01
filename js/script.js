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
const enter_data = document.getElementById("enter_data")
const default_data = document.getElementById("default_data")
const input_intervals = document.getElementById("input_intervals")

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

let input_sample = []

const intervals_n = document.getElementById("intervals_n")
const level_n = document.getElementById("level_n")

document.addEventListener('DOMContentLoaded', function() {
    enter_data.onclick = function() {
        if (document.getElementById("input_table")) {
            document.getElementById("input_table").remove()
        }

        createInputTable(1, intervals_n.value, default_sample)
    }

    default_data.onclick = function() {
        if (document.getElementById("input_table")) {
            document.getElementById("input_table").remove()
        }

        createInputTable(2, 9, default_sample)
    }

    task1_calculate.onclick = function() {
        solution1.innerHTML = ""
        input_sample = parseTable()
        intervalSeries(input_sample)
        checkHypotesis(input_sample)
    }

    task2_calculate.onclick = function() {
        solution2.innerHTML = ""

    }

    task3_calculate.onclick = function() {
        solution3.innerHTML = ""
    }
});
