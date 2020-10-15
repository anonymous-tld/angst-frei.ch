var imgdir = "/assets/img/graph/";
var nodes = new vis.DataSet([
  { id: 101, label: "Charité", image: imgdir + "charité.jpg" },
  { id: 102, label: "Swissmedic", image: imgdir + "swissmedic.jpg" },
  { id: 103, label: "Robert Koch-Intitut", image: imgdir + "RKI.png" },
  { id: 104, label: "Helmholz", image: imgdir + "HZI.png" },
  { id: 201, label: "Christian Drosten", image: imgdir + "drosten.jpg" },
  { id: 202, label: "Lothar Wieler", image: imgdir + "wieler.jpg" },
  { id: 203, label: "Tedros Adhanom Ghebreyesus", image: imgdir + "ghebreyesus.jpg" },
  { id: 204, label: "Michael Meyer-Hermann", image: imgdir + "meyer.jpg" },
  { id: 205, label: "Isabella Eckerle", image: imgdir + "eckerle.jpg" },
  { id: 301, label: "BRD", image: imgdir + "../flaggen/DE.png" },
  { id: 302, label: "CH", image: imgdir + "../flaggen/CH.png" },
  { id: 401, label: "Bill and Melinda Gates Foundation", image: imgdir + "BMG.webp" },
  { id: 402, label: "WHO", image: imgdir + "WHO.jpg" },
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: 401, to: 101, arrows: "to" },
  { from: 401, to: 402, arrows: "to" },
  { from: 401, to: 102, arrows: "to" },
  { from: 401, to: 103, arrows: "to" },
  { from: 401, to: 104, arrows: "to" },
  { from: 402, to: 203, arrows: "to" },
  { from: 101, to: 201, arrows: "to" },
  { from: 102, to: 302, arrows: "to" },
  { from: 103, to: 202, arrows: "to" },
  { from: 103, to: 301, arrows: "to" },
  { from: 103, to: 101, arrows: "to" },
  { from: 104, to: 204, arrows: "to" },
  { from: 201, to: 301, arrows: "to" },
  { from: 204, to: 301, arrows: "to" },
  { from: 205, to: 101, arrows: "to" },
  { from: 205, to: 201, arrows: "to" },
]);

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  nodes:{
    borderWidth: 0,
    shape: 'circularImage',
  }
};

var network = new vis.Network(container, data, options);
