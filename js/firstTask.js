function intervalSeries(input_sample) {
    let solution = document.createElement("p")
    solution.innerHTML = "Інтервальний статичний ряд:"
    document.getElementById("task1_solution").appendChild(solution)

    let table = document.createElement("table")
    let tr = document.querySelectorAll("#input_intervals > table > tr")

    let tr1 = document.createElement("tr")
    let tr2 = document.createElement("tr")
    let tr3 = document.createElement("tr")

    let total_frequency = 0
    let labels = []
    let relative = []

    for (let i = 0; i < tr.length; i++) {
        total_frequency += input_sample[i][2]
    }

    for (let i = 0; i < tr.length; i++) {
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td1.innerText = "[" + input_sample[i][0] + ", " + input_sample[i][1] + ")"
        labels.push("[" + input_sample[i][0] + ", " + input_sample[i][1] + ")")
        td2.innerText = input_sample[i][2]
        td3.innerText = (input_sample[i][2] / total_frequency).toFixed(4)
        relative.push(input_sample[i][2])

        tr1.appendChild(td1)
        tr2.appendChild(td2)
        tr3.appendChild(td3)
    }

    table.appendChild(tr1)
    table.appendChild(tr2)
    table.appendChild(tr3)
    document.getElementById("task1_solution").appendChild(table)

    let bar_chart = document.createElement("div")
    bar_chart.setAttribute("class", "barchart")
    let output_bar_chart = document.createElement("canvas")
    output_bar_chart.id =  "output_barchart"
    bar_chart.appendChild(output_bar_chart)
    document.getElementById("task1_solution").appendChild(bar_chart)
    
    Chart.defaults.font.size = "15px"
    let chart = new Chart(document.getElementById("output_barchart").getContext('2d'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Інтервальний статичний ряд',
                backgroundColor: 'rgb(76, 153, 0)',
                borderColor: 'rgb(76, 153, 0)',
                data: relative
            }]
        },
        options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Інтервали'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Число спостережень'
                }
              }
            }
        }
    })
}

function checkHypotesis(arr) {
    let hypotesis = document.createElement("p")
    hypotesis.innerHTML = "H0: припустимо, що випадкова величина розподілена за нормальним законом"
    document.getElementById("task1_solution").appendChild(hypotesis)

    let description = document.createElement("p")
    description.innerHTML = "Розрахунки при перевірці гіпотези:"
    document.getElementById("task1_solution").appendChild(description)

    let table = document.createElement("table")
    table.innerHTML = "<th>Xi</th>\
                    <th>Xi+1</th>\
                    <th>ni</th>\
                    <th>Zi</th>\
                    <th>Zi+1</th>\
                    <th>F(x1)</th>\
                    <th>F(x2)</th>\
                    <th>pi</th>\
                    <th>ni'</th>\
                    <th>Ki'</th>"
    table.id = "task1_table"

    let series = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][2]; j++) {
            series.push(parseFloat(((arr[i][0] + arr[i][1]) / 2).toFixed(4)))
        }
    }

    let mean_value = parseFloat((series.reduce((a, b) => a + b) / series.length).toFixed(5))
    let dispersion_value = 0

    for (let i = 0; i < series.length; i++) {
        dispersion_value += Math.pow(series[i] - mean_value, 2)
    }
    
    dispersion_value = parseFloat((dispersion_value / (series.length - 1)).toFixed(5))
    let deviation_value = parseFloat(Math.sqrt(dispersion_value).toFixed(5))
    let observed_value = 0

    for (let i = 0; i < 9; i++) {
        let tr = document.createElement("tr")

        let xi = document.createElement("td")
        xi.innerText = arr[i][0]

        let xi1 = document.createElement("td")
        xi1.innerText = arr[i][1]

        let ni = document.createElement("td")
        ni.innerText = arr[i][2]

        let zi = document.createElement("td")
        let zi_value = ((arr[i][0] - mean_value) / deviation_value).toFixed(5)
        zi.innerText = zi_value

        let zi1 = document.createElement("td")
        let zi1_value = ((arr[i][1] - mean_value) / deviation_value).toFixed(5)
        zi1.innerText = zi1_value

        let fzi = document.createElement("td")
        let fzi_value = 0
        if (zi_value < 0) {
            fzi_value = - (laplaceIntegration(parseFloat(Math.abs(zi_value)))).toFixed(5)
        } else {
            fzi_value = (laplaceIntegration(parseFloat(Math.abs(zi_value)))).toFixed(5)
        }
        fzi.innerText = fzi_value

        let fzi1 = document.createElement("td")
        let fzi1_value = 0
        if (zi1_value < 0) {
            fzi1_value = - (laplaceIntegration(parseFloat(Math.abs(zi1_value)))).toFixed(5)
        } else {
            fzi1_value = (laplaceIntegration(parseFloat(Math.abs(zi1_value)))).toFixed(5)
        }
        fzi1.innerText = fzi1_value

        let pi = document.createElement("td")
        let pi_value = fzi1_value - fzi_value
        pi.innerText = pi_value.toFixed(5)

        let npi = document.createElement("td")
        let npi_value = series.length * pi_value
        npi.innerText = npi_value.toFixed(5)

        let ki = document.createElement("td")
        let ki_value = ((arr[i][2] - npi_value) ** 2) / npi_value
        ki.innerText = ki_value.toFixed(5)
        observed_value += ki_value

        tr.appendChild(xi)
        tr.appendChild(xi1)
        tr.appendChild(ni)
        tr.appendChild(zi)
        tr.appendChild(zi1)
        tr.appendChild(fzi)
        tr.appendChild(fzi1)
        tr.appendChild(pi)
        tr.appendChild(npi)
        tr.appendChild(ki)
        table.appendChild(tr)
    }

    document.getElementById("task1_solution").appendChild(table)

    let description2 = document.createElement("p")
    description2.innerHTML = "Степінь свободи:"
    document.getElementById("task1_solution").appendChild(description2)

    let k_value = arr.length - 3
    let k = document.createElement("div")
    k.innerText = k_value
    document.getElementById("task1_solution").appendChild(k)

    let description3 = document.createElement("p")
    description3.innerHTML = "Спостережене значення:"
    document.getElementById("task1_solution").appendChild(description3)

    let observed = document.createElement("div")
    observed.innerText = observed_value.toFixed(5)
    document.getElementById("task1_solution").appendChild(observed)

    let description4 = document.createElement("p")
    description4.innerHTML = "Критична точка:"
    document.getElementById("task1_solution").appendChild(description4)

    let critical_value = criticalPointPearson(k_value)
    let critical = document.createElement("div")
    critical.innerText = critical_value
    document.getElementById("task1_solution").appendChild(critical)

    let conclusion = document.createElement("p")
    if (observed_value < critical_value) {
        conclusion.innerHTML = "Висновок: висунута гіпотеза доведена"
    } else {
        conclusion.innerHTML = "Висновок: висунута гіпотеза не доведена"
    }
    document.getElementById("task1_solution").appendChild(conclusion)
}
//Висунута гіпотеза не доведена
