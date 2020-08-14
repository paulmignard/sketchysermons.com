module.exports = function(eleventyConfig) {
    
    eleventyConfig.setTemplateFormats([
        "png",
        "jpg",
        "jpeg",
        "gif",
        "js",
        "liquid",
        "html",
        "otf",
        "md",
        "css" // css is not yet a recognized template extension in Eleventy
    ]);

    let liquidJs = require("liquidjs");
    let options = {
        extname: ".liquid",
        dynamicPartials: true,
        strict_filters: true,
        root: ["_includes"]
    };

    eleventyConfig.setLibrary("liquid", liquidJs(options))


    // Let's sort for year
    /*
    eleventyConfig.addCollection("byYear", function(collectionApi) {

        let yearArray = [];
        collectionApi.getAll().forEach(function(a){
            let t = new Date(a.date);
            console.log(t.getFullYear());
        });

        return collectionApi.getAll();

    });*/

  };