function createInputTable(flag, amountOfIntervals, arr) {
    let table = document.createElement("table") 
    table.innerHTML = "<th>Початок інтервалу</th><th>Кінець інтервалу</th><th>Число спостережень</th>"
    table.id = "input_table"

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

    input_intervals.appendChild(table)
}

function parseTable (arr) {
    
}
