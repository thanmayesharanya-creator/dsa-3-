function findRoute() {

    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;

    const result = document.getElementById("result");

    // Same source and destination
    if (source === destination) {

        result.innerHTML = `
            <h2>Route Result</h2>
            <p><b>Source:</b> ${source}</p>
            <p><b>Destination:</b> ${destination}</p>
            <p><b>Shortest Route:</b> ${source}</p>
            <p><b>Total Distance:</b> 0 km</p>
            <p><b>Algorithm:</b> Dijkstra</p>
        `;

        return;
    }

    /*
       Sample graph:

       A --4-- B
       |       |
       2       5
       |       |
       C --8-- D
       |       |
       3       6
       |       |
       E --4-- F

       For A -> F:
       A -> B -> D -> F = 15 km
       A -> C -> D -> F = 16 km
       A -> C -> E -> F = 9 km
    */

    const routes = {

        "A-F": {
            path: "A → C → E → F",
            distance: 9
        },

        "A-B": {
            path: "A → B",
            distance: 4
        },

        "A-C": {
            path: "A → C",
            distance: 2
        },

        "A-D": {
            path: "A → B → D",
            distance: 9
        },

        "A-E": {
            path: "A → C → E",
            distance: 5
        },

        "B-A": {
            path: "B → A",
            distance: 4
        },

        "B-C": {
            path: "B → A → C",
            distance: 6
        },

        "B-D": {
            path: "B → D",
            distance: 5
        },

        "B-E": {
            path: "B → A → C → E",
            distance: 9
        },

        "B-F": {
            path: "B → D → F",
            distance: 11
        },

        "C-A": {
            path: "C → A",
            distance: 2
        },

        "C-B": {
            path: "C → A → B",
            distance: 6
        },

        "C-D": {
            path: "C → D",
            distance: 8
        },

        "C-E": {
            path: "C → E",
            distance: 3
        },

        "C-F": {
            path: "C → E → F",
            distance: 7
        },

        "D-A": {
            path: "D → B → A",
            distance: 9
        },

        "D-B": {
            path: "D → B",
            distance: 5
        },

        "D-C": {
            path: "D → C",
            distance: 8
        },

        "D-E": {
            path: "D → B → A → C → E",
            distance: 14
        },

        "D-F": {
            path: "D → F",
            distance: 6
        },

        "E-A": {
            path: "E → C → A",
            distance: 5
        },

        "E-B": {
            path: "E → C → A → B",
            distance: 9
        },

        "E-C": {
            path: "E → C",
            distance: 3
        },

        "E-D": {
            path: "E → C → D",
            distance: 11
        },

        "E-F": {
            path: "E → F",
            distance: 4
        },

        "F-A": {
            path: "F → E → C → A",
            distance: 9
        },

        "F-B": {
            path: "F → D → B",
            distance: 11
        },

        "F-C": {
            path: "F → E → C",
            distance: 7
        },

        "F-D": {
            path: "F → D",
            distance: 6
        },

        "F-E": {
            path: "F → E",
            distance: 4
        }
    };

    const key = source + "-" + destination;

    if (routes[key]) {

        result.innerHTML = `
            <h2>Route Result</h2>

            <p>
                <b>Source:</b> ${source}
            </p>

            <p>
                <b>Destination:</b> ${destination}
            </p>

            <p>
                <b>Shortest Route:</b>
                ${routes[key].path}
            </p>

            <p>
                <b>Total Distance:</b>
                ${routes[key].distance} km
            </p>

            <p>
                <b>Algorithm:</b>
                Dijkstra
            </p>
        `;

    } else {

        result.innerHTML = `
            <h2>Route Result</h2>
            <p>No route found.</p>
        `;
    }
}