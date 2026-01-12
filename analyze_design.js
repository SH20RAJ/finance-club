const fs = require('fs');

try {
  const rawData = fs.readFileSync('figma_design.json', 'utf8');
  const design = JSON.parse(rawData);

  console.log(`# Design Analysis for: ${design.name}`);
  console.log(`Last Modified: ${design.lastModified}`);

  const document = design.document;
  
  function traverse(node, context = {}) {
    // Collect Colors
    if (node.name.toLowerCase().includes('color') || node.name.toLowerCase().includes('palette')) {
       // logic to extract fills
       if(node.children) {
         node.children.forEach(child => {
            if(child.fills && child.fills.length > 0) {
               child.fills.forEach(fill => {
                 if(fill.type === 'SOLID') {
                   const {r,g,b} = fill.color;
                   console.log(`- Color found in ${child.name}: rgba(${Math.round(r*255)}, ${Math.round(g*255)}, ${Math.round(b*255)}, ${fill.opacity || 1})`);
                 }
               })
            }
         })
       }
    }

    // Collect Typography
    // Basic heuristic: look for nodes with style text props or names like "Heading", "Body"
    if (node.type === 'TEXT') {
       if (node.name.toLowerCase().includes('heading') || node.name.toLowerCase().includes('paragraph') || node.style) {
          const s = node.style;
          if (s) {
              console.log(`- Typography (${node.name}): Font=${s.fontFamily} Weight=${s.fontWeight} Size=${s.fontSize} LineHeight=${s.lineHeightPx ? Math.round(s.lineHeightPx) : 'Auto'}`);
          }
       }
    }

    // Collect Components (Frames with specific names often denote sections)
    if (node.type === 'FRAME' || node.type === 'COMPONENT') {
       console.log(`> Component/Section: ${node.name} (Type: ${node.type})`);
    }

    if (node.children) {
      node.children.forEach(child => traverse(child));
    }
  }

  // Iterate through top-level nodes (Pages)
  Object.values(design.nodes).forEach(node => {
      if(node.document) traverse(node.document);
  });

} catch (err) {
  console.error('Error parsing design:', err);
}
