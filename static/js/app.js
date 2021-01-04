// Function to build horizontal bar chart
function horizontalBarChart(sample) {

    //Get data from samples.json
    d3.json('samples.json').then((data) => {
        // console.log(data);

        var samples = data.samples;
        var resultarray = samples.filter(sampleobject => sampleobject.id == sample);
        var result = resultarray[0]

        var values = result.sample_values;
        var ids = result.otu_ids;
        var labels = result.otu_labels;

        var trace1 = {
            x: values,
            y: ids,
            type: "bar",
            text:labels,
            orientation: "h"
        };

        var barData = [trace1];

        var barLayout = {
            title: "Top 10 OTUs",
            xaxis: {title: "OTU IDs"},
            yaxis: {title: "Sample Values"}
        }

        Plotly.newPlot("plot", barData, barLayout);
    });
};

