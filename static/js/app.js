// Function to build horizontal bar chart
function horizontalBarChart(sample) {

    //Get data from samples.json
    d3.json('samples.json').then((data) => {
        console.log(data);

        var samples = data.samples;
        var resultarray = samples.filter(sampleobject => sampleobject.id == sample);
        var result = resultarray[0]

        var values = result.sample_values;
        var ids = result.otu_ids;
        var labels = result.otu_labels;

        var trace1 = {
            x: values.slice(0,10).reverse(),
            y: ids.slice(0,10).map(otuID => `OTU ${otuID}`),
            type: "bar",
            text:labels.slice(0,10).reverse(),
            orientation: "h"
        };

        var barData = [trace1];

        var barLayout = {
            title: "Top 10 OTUs",
            xaxis: {title: "Sample Values"},
            yaxis: {title: "OTU IDs"}
        }

        Plotly.newPlot("bar", barData, barLayout);
      
    });
};
horizontalBarChart(940)
