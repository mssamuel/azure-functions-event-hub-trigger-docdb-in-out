module.exports = function (context, myEventHubTrigger) {

  // show the work item id from the EventHub Trigger
  context.log('JavaScript eventhub trigger function processed work item:', myEventHubTrigger);
  
  // Copy the content from inputDocument with id equal to EventHub Trigger to outputDocument, with the update of property "name"
  context.bindings.outputDocument = JSON.stringify({
    id: context.bindings.inputDocument.id,
    name: context.bindings.inputDocument.name + 'updated',
    type: context.bindings.inputDocument.type,
    databaseName: context.bindings.inputDocument.databaseName,
    collectionName: context.bindings.inputDocument.collectionName,
    collection: context.bindings.inputDocument.collection,
    direction: context.bindings.inputDocument.direction
  });
