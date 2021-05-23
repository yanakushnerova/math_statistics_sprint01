function createInputTable(flag, amountOfIntervals, arr, task) {
    let table = document.createElement("table") 
    table.innerHTML = "<th>Початок інтервалу</th><th>Кінець інтервалу</th><th>Число спостережень</th>"
    table.id = "input_table_" + task

    if (flag == 1) {
        for (let i = 0; i < amountOfIntervals; i++) {
            let tr = document.createElement("tr")

            let ib = document.createElement("td")
            let ibi = document.createElement("input")

            let ie = document.createElement("td")
            let iei = document.createElement("input")

            let ne = document.createElement("td")
            let nei = document.createElement("input")

            ib.appendChild(ibi)
            ie.appendChild(iei)
            ne.appendChild(nei)

            tr.appendChild(ib)
            tr.appendChild(ie)
            tr.appendChild(ne)

            table.appendChild(tr)
        }
    } else if (flag == 2) {
        for (let i = 0; i < amountOfIntervals; i++) {
            let tr = document.createElement("tr")

            let ib = document.createElement("td")
            let ibi = document.createElement("input")
            ibi.value = arr[i][0]

            let ie = document.createElement("td")
            let iei = document.createElement("input")
            iei.value = arr[i][1]

            let ne = document.createElement("td")
            let nei = document.createElement("input")
            nei.value = arr[i][2]

            ib.appendChild(ibi)
            ie.appendChild(iei)
            ne.appendChild(nei)

            tr.appendChild(ib)
            tr.appendChild(ie)
            tr.appendChild(ne)

            table.appendChild(tr)
        }
    }

    if (task == 1) {
        input_intervals.appendChild(table)
    } else if (task == 2) {
        input_intervals_task2.appendChild(table)
    } else if (task == 3) {
        input_intervals_task3.appendChild(table)
    }
}

function parseTable(task) {
    let tr
    if (task == 1) {
        tr = document.querySelectorAll("#input_intervals > table > tr")
    } else if (task == 2) {
        tr = document.querySelectorAll("#input_intervals_task2 > table > tr")
    } else if (task == 3) {
        tr = document.querySelectorAll("#input_intervals_task3 > table > tr")
    }

    let arr = Array.from(Array(tr.length), () => new Array(3))

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].querySelectorAll("td input")
        for (let j = 0; j < td.length; j++) {
            arr[i][j] = parseFloat(td[j].value) 
        }
    }

    return arr
}
