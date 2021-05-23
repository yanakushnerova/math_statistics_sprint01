function checkHypotesis2(arr1, arr2) {
    let hypotesis = document.createElement("p")
    hypotesis.innerHTML = "H0: припустимо, що дисперсії двух нормальних генеральних сукупностей рівні(D(X) = D(Y))"
    document.getElementById("task2_solution").appendChild(hypotesis)

    let series1 = []

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i][2]; j++) {
            series1.push(parseFloat(((arr1[i][0] + arr1[i][1]) / 2).toFixed(4)))
        }
    }

    let mean_value_1 = parseFloat((series1.reduce((a, b) => a + b) / series1.length).toFixed(5))
    let dispersion_value_1 = 0

    for (let i = 0; i < series1.length; i++) {
        dispersion_value_1 += Math.pow(series1[i] - mean_value_1, 2)
    }
    
    dispersion_value_1 = parseFloat((dispersion_value_1 / (series1.length - 1)).toFixed(5))

    let series2 = []

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr2[i][2]; j++) {
            series2.push(parseFloat(((arr2[i][0] + arr2[i][1]) / 2).toFixed(4)))
        }
    }

    let mean_value_2 = parseFloat((series2.reduce((a, b) => a + b) / series2.length).toFixed(5))
    let dispersion_value_2 = 0

    for (let i = 0; i < series2.length; i++) {
        dispersion_value_2 += Math.pow(series2[i] - mean_value_2, 2)
    }
    
    dispersion_value_2 = parseFloat((dispersion_value_2 / (series2.length - 1)).toFixed(7))

    let observed_value, degree1_value, degree2_value

    if (dispersion_value_1 > dispersion_value_2) {
        observed_value = dispersion_value_1 / dispersion_value_2
        degree1_value = arr1.length - 1
        degree2_value = arr2.length - 1
    } else {
        observed_value = dispersion_value_2 / dispersion_value_1
        degree1_value = arr2.length - 1
        degree2_value = arr1.length - 1
    }

    let critical_value = criticalFisher(degree1_value, degree2_value)

    let description = document.createElement("p")
    description.innerHTML = "Степінь свободи 1:"
    document.getElementById("task2_solution").appendChild(description)

    let degree1 = document.createElement("div")
    degree1.innerText = degree1_value
    document.getElementById("task2_solution").appendChild(degree1)

    let description2 = document.createElement("p")
    description2.innerHTML = "Степінь свободи 2:"
    document.getElementById("task2_solution").appendChild(description2)

    let degree2 = document.createElement("div")
    degree2.innerText = degree2_value
    document.getElementById("task2_solution").appendChild(degree2)

    let description3 = document.createElement("p")
    description3.innerHTML = "Корегована виборочна дисперсія 1:"
    document.getElementById("task2_solution").appendChild(description3)

    let dispersion1 = document.createElement("div")
    dispersion1.innerText = dispersion_value_1
    document.getElementById("task2_solution").appendChild(dispersion1)

    let description4 = document.createElement("p")
    description4.innerHTML = "Корегована виборочна дисперсія 2:"
    document.getElementById("task2_solution").appendChild(description4)

    let dispersion2 = document.createElement("div")
    dispersion2.innerText = dispersion_value_2
    document.getElementById("task2_solution").appendChild(dispersion2)

    let description5 = document.createElement("p")
    description5.innerHTML = "Спостережене значення:"
    document.getElementById("task2_solution").appendChild(description5)

    let observed = document.createElement("div")
    observed.innerText = (Math.abs(observed_value)).toFixed(7)
    document.getElementById("task2_solution").appendChild(observed)

    let description6 = document.createElement("p")
    description6.innerHTML = "Критична точка:"
    document.getElementById("task2_solution").appendChild(description6)

    let critical = document.createElement("div")
    critical.innerText = critical_value
    document.getElementById("task2_solution").appendChild(critical)

    let conclusion = document.createElement("p")
    
    if (observed_value < critical_value) {
        conclusion.innerHTML = "Висновок: висунута гіпотеза доведена"
    } else {
        conclusion.innerHTML = "Висновок: висунута гіпотеза не доведена"
    }

    document.getElementById("task2_solution").appendChild(conclusion)
}
