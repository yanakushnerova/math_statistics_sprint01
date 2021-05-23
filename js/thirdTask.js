function checkHypotesis3(arr1, arr2) {
    let hypotesis = document.createElement("p")
    hypotesis.innerHTML = "H0 (Z-test): припустимо, що середнє значення двох нормально розподілених випадкових величин рівні"
    document.getElementById("task3_solution").appendChild(hypotesis)

    let hypotesis2 = document.createElement("p")
    hypotesis2.innerHTML = "H0 (T-test): припустимо, що середнє значення двох нормально розподілених випадкових величин рівні"
    document.getElementById("task3_solution").appendChild(hypotesis2)

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

    let n1 = arr1.length
    let n2 = arr2.length
    let degree1_value = n1 + n2 - 2

    let observed_value_t = Math.abs(mean_value_1 - mean_value_2) / Math.sqrt((n1 * dispersion_value_1 + n2 * dispersion_value_2) / degree1_value * (1 / n1 + 1 / n2))
    let critical_value_t = criticalT(degree1_value)

    let observed_value_z = Math.abs(mean_value_1 - mean_value_2) / Math.sqrt((dispersion_value_1 / n1 + dispersion_value_2 / n2))
    let critical_value_z = laplaceReversedIntegration((1 - 0.05) / 2)

    let description = document.createElement("p")
    description.innerHTML = "Спостережене значення T:"
    document.getElementById("task3_solution").appendChild(description)

    let observed_t = document.createElement("div")
    observed_t.innerText = observed_value_t.toFixed(7)
    document.getElementById("task3_solution").appendChild(observed_t)

    let description2 = document.createElement("p")
    description2.innerHTML = "Критична точка T:"
    document.getElementById("task3_solution").appendChild(description2)

    let critical_t = document.createElement("div")
    critical_t.innerText = critical_value_t
    document.getElementById("task3_solution").appendChild(critical_t)

    let description3 = document.createElement("p")
    description3.innerHTML = "Спостережене значення Z:"
    document.getElementById("task3_solution").appendChild(description3)

    let observed_z = document.createElement("div")
    observed_z.innerText = observed_value_z.toFixed(7)
    document.getElementById("task3_solution").appendChild(observed_z)

    let description4 = document.createElement("p")
    description4.innerHTML = "Критична точка Z:"
    document.getElementById("task3_solution").appendChild(description4)

    let critical_z = document.createElement("div")
    critical_z.innerText = critical_value_z
    document.getElementById("task3_solution").appendChild(critical_z)

    let conclusion1 = document.createElement("p")
    
    if (observed_value_t < critical_value_t) {
        conclusion1.innerHTML = "Висновок: висунута гіпотеза H0 (Z-test) доведена"
    } else {
        conclusion1.innerHTML = "Висновок: висунута гіпотеза H0 (Z-test) не доведена"
    }

    document.getElementById("task3_solution").appendChild(conclusion1)

    let conclusion2 = document.createElement("p")
    
    if (observed_value_z < critical_value_z) {
        conclusion2.innerHTML = "Висновок: висунута гіпотеза H0 (T-test) доведена"
    } else {
        conclusion2.innerHTML = "Висновок: висунута гіпотеза H0 (T-test) не доведена"
    }

    document.getElementById("task3_solution").appendChild(conclusion2)
}
