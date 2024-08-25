function analyzeInventory(section1, section2) {
  // write your code here
  console.log(`Initial arrays ${section1}, ${section2}`);

  const combinedInventory = section1.concat(section2);
  console.log("Combined Inventory:", combinedInventory);

  const flattenedInventory = combinedInventory.flat();
  console.log("Flattened Inventory:", flattenedInventory);

  const indexOfWidget = flattenedInventory.indexOf("widget");
  console.log('Index of "widget":', indexOfWidget);

  const includesGadget = flattenedInventory.includes("gadget");
  console.log('Includes "gadget":', includesGadget);
}
const section1 = [
  ["hammer", "nail"],
  ["screwdriver", "widget"],
];
const section2 = [
  ["gadget", "saw"],
  ["drill", "bolt"],
];
analyzeInventory(section1, section2);
