let content_page = document.getElementById("content_page")
let first_page = document.getElementById("first_page")
let second_page = document.getElementById("second_page")
let third_page = document.getElementById("third_page")

let calculate1 = document.getElementById("task1_calculate")
let calculate2 = document.getElementById("task2_calculate")
let calculate3 = document.getElementById("task3_calculate")

let solution1 = document.getElementById("task1_solution")
let solution2 = document.getElementById("task2_solution")
let solution3 = document.getElementById("task3_solution")

const sample_names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let sample_info = document.createElement("p")
sample_info.setAttribute("id", "sample_info")

let input_page = document.getElementById("input_page")
let enter_data = document.getElementById("enter_data")
let default_data = document.getElementById("default_data")
let input_intervals = document.getElementById("input_intervals")

document.addEventListener('DOMContentLoaded', function() {
    // generate_sample.onclick = function() {
    //     sample_info.innerText = ""

    //     if (document.getElementById("sample_inputs")) {
    //         document.getElementById("sample_inputs").remove()
    //     }

    //     let samples = document.getElementById("sample_n").value

    //     if (samples > 26 || samples < 2) {
    //         sample_info.innerText = "Невірна кількість вибірок"
    //     } else {
    //         generateInputs(samples)
    //     }

    //     samples_div.appendChild(sample_info)
    // }

    // set_default.onclick = function() {
    //     sample_info.innerText = ""

    //     if (document.getElementById("sample_inputs")) {
    //         document.getElementById("sample_inputs").remove()
    //     }

    //     generateInputs(2)

    //     document.getElementById("sample-1").value = default_sample_A
    //     document.getElementById("sample-2").value = default_sample_B
    // }

    task1_calculate.onclick = function() {
        solution1.innerHTML = ""
    }

    task2_calculate.onclick = function() {
        solution2.innerHTML = ""
    }

    task3_calculate.onclick = function() {
        solution3.innerHTML = ""
        
    }
});
