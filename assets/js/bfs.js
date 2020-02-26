import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@d3/marimekko-chart.js?v=3";
const inspect = Inspector.into("#observablehq-0d1accb7");
(new Runtime).module(define, name => (name === "format") && inspect());