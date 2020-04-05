/**
 *
 * @param _e
 * @param textToInsert : string text to insert at cursor position
 */
export const insertText = async (
  _e: React.MouseEvent,
  textToInsert: string = "This is the example to insert text at cursor position."
) => {
  return Word.run(async context => {
    // Find Current Selection in the document
    const currentSelection = context.document.getSelection();

    // Create an object to create text and insert on current selection
    const text = currentSelection.insertText(textToInsert, Word.InsertLocation.after);

    // insert white space
    text.insertText(" ", Word.InsertLocation.after);
  });
};

/**
 *
 * @param _e
 * @param paragraphToInsert : string paragraph to insert at cursor position
 */
export const insertParagraph = async (
  _e: React.MouseEvent,
  paragraphToInsert: string = "This is the example to insert paragraph at cursor position.\nThis is the new line of the pragraph.\n\nThank you."
) => {
  return Word.run(async context => {
    // Find current selection in the document
    const currentSelection = context.document.getSelection();

    // Create paragraph object and insert on current selection
    const paragraph = currentSelection.insertParagraph(paragraphToInsert, Word.InsertLocation.after);
  });
};