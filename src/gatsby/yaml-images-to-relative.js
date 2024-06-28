const _ = require(`lodash`);
const deepMap = require("deep-map");
const slash = require(`slash`);
const path = require(`path`);

const fileNodes = [];

module.exports.yamlImagesToRelative = ({ node, getNode }) => {
    // Save file references
    fileNodes.push(node);
    // Only process markdown files
    if (node.internal.type.endsWith('Yaml')) {
        // Convert paths in data to relative
        function makeRelative(value) {
            if (_.isString(value) && path.isAbsolute(value)) {
                let imagePath;
                const foundImageNode = _.find(fileNodes, file => {
                    if (!file.dir) return;
                    imagePath = path.join(file.dir, path.basename(value));
                    return slash(path.normalize(file.absolutePath)) === slash(imagePath);
                });

                if (foundImageNode) {
                    return slash(path.relative(path.join(getNode(node.parent).absolutePath, ".."), imagePath));
                }
            }

            return value;
        }

        // Deeply iterate through data for absolute paths
        deepMap(node, makeRelative, { inPlace: true });
    }
};