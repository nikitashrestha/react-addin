const base64Image =
  "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";

const htmlContent =
  '<div><h1 style ="font-family:verdena; color:red;">HTML Header</h1><p style="color:blue;">This is html paragraph written in word</p><a href="#">Anchor Tag</a><ul><li>List item 1</li><li>list item 2</li><li></li></ul></div>';

const tableData = [
  ["Id", "Full Name", "Address"],
  ["1", "Bob Marley", "California"],
  ["2", "John Smith", "New York"]
];

/**
 *
 * @param _e
 * @param path : string - base64 encoded image
 */
export const insertImage = async (_e: React.MouseEvent, base64EncodedImage: string = base64Image) => {
  return Word.run(async context => {
    // Find Current Selection in the document
    const currentSelection = context.document.getSelection();

    // Create an object to create image and insert on current selection
    const image = currentSelection.insertInlinePictureFromBase64(base64EncodedImage, "After");

    // load the image object to word object model
    context.load(image);

    // insert white space
    image.insertText(" ", Word.InsertLocation.after);
  });
};

/**
 *
 * @param _e
 * @param (string) html html tags
 */
export const insertHTML = async (_e: React.MouseEvent, html: string = htmlContent) => {
  return Word.run(async context => {
    // Find current selection in the document
    const currentSelection = context.document.getSelection();

    // Create html object and insert into current selection
    const htmlObj = currentSelection.insertHtml(html, Word.InsertLocation.after);

    context.load(htmlObj);
    htmlObj.select("End");
  });
};

/**
 *
 * @param _e
 * @param data : data to feed in table
 */
export const insertTable = async (_e: React.MouseEvent, data: string[][] = tableData) => {
  return Word.run(async context => {
    // Differentiate table Header and datas
    const tableHeader = [data[0]];
    const tableValues = data.filter((value, index) => {
      if (index != 0) {
        return value;
      }
    });

    // Find current selection in the document
    const currentSelection = context.document.getSelection();

    // Create table object and insert on current selection
    const table = currentSelection.insertTable(1, tableHeader[0].length, Word.InsertLocation.after, tableHeader);

    //Add table data
    table.addRows(Word.InsertLocation.end, data.length - 1, tableValues);

    // Style table data
    // Add style to table header
    table.font.set({
      name: "Courier New",
      size: 14,
      bold: true
    });
  });
};
