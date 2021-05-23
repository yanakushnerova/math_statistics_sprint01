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
    <th>x1</th>\
    <th>x2</th>\
    <th>F(x1)</th>\
    <th>F(x2)</th>\
    <th>pi</th>\
    <th>ni'</th>\
    <th>Ki'</th>"
    table.id = "task1_table"

    for (let i = 0; i < 9; i++) {
        let tr = document.createElement("tr")

        let xi = document.createElement("td")
        xi.innerText = arr[i][0]
        let xi1 = document.createElement("td")
        xi1.innerText = arr[i][1]
        let ni = document.createElement("td")
        ni.innerText = arr[i][2]

        tr.appendChild(xi)
        tr.appendChild(xi1)
        tr.appendChild(ni)
        table.appendChild(tr)
    }

    document.getElementById("task1_solution").appendChild(table)
}
