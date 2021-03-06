/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_a": "A",
    "_abcClass": "ABC Class",
    "_aisle": "Aisle",
    "_adjustment": "Adjustment",
    "_allowableItems": "Allowable Items",
    "_allowAvgCostMethod": "Average",
    "_allowDups": "Allow Dups.",
    "_allowJobCostMethod": "Job",
    "_allowReceiptCostOverride": "Allow Inventory Receipt Cost Override (Avg. costing method only)",
    "_allowStdCostMethod": "Standard",
    "_atShipping": "At Shipping",
    "_average": "Average",
    "_b": "B",
    "_backlog": "Backlog",
    "_billto": "Bill To",
    "_bin": "Bin",
    "_c": "C",
    "_controlMethod": "Control Method",
    "_costing": "Costing",
    "_countAvgCostMethod": "Cost to Use When Posting Count Tag for Avg. Cost Items",
    "_countSlipAuditing": "Count Slip # Auditing",
    "_cycleCount": "Cycle Count",
    "_cycleCountFrequency": "Cycle Count Frequency",
    "_defaultEventFence": "Default Event Fence (Days)",
    "_disableReceiptExcessQty": "Disallow PO Receipt of Qty greater than ordered",
    "_distributionDetail": "Distribution Detail",
    "_dontPost": "Do Not Post",
    "_enableAsOfQOH": "Enable As-Of QOH Reporting",
    "_enterReceipt": "Enter Receipt",
    "_inventory": "Inventory",
    "_inventoryHistory": "Inventory History",
    "_inventoryDescription": "Shipping and Receiving, Inventory and Cost Management",
    "_isAutomaticAbcClassUpdates": "Auto ABC Updates",
    "_isLocationControl": "Location Control",
    "_isNetable": "Netable",
    "_isReceiveLocationAuto": "Auto Receive",
    "_isRestricted": "Restricted",
    "_isShipped": "Shipped",
    "_isStocked": "Stocked",
    "_isStockLocationAuto": "Auto Issue",
    "_isIssueLocationAuto": "Auto",
    "_issue": "Issue",
    "_issueBreeder": "Issue Breeder",
    "_issueLocation": "Issue Location",
    "_issueAll": "Issue All",
    "_issueAll?": "Are you sure you want to issue stock for all these items?",
    "_issueExcess": "You are attempting to issue more material than is required. Are you sure you want to do this?",
    "_issueLine": "Issue Line",
    "_issueMaterial": "Issue Material",
    "_issueStock": "Issue Stock",
    "_issueToShipping": "Issue to Shipping",
    "_isUseDefaultLocation": "Use Default Location",
    "_job": "Job",
    "_kitComponentInheritCOS": "Kit Components Inherit COS from Kit Parent",
    "_leadTime": "Lead Time",
    "_location": "Location",
    "_locationControl": "Location Control",
    "_locations": "Locations",
    "_locationComment": "Comment",
    "_materialReceipt": "Material Receipt",
    "_maximumOrderQuantity": "Order Max.",
    "_minimumOrderQuantity": "Order Min.",
    "_multipleLocationControl": "Multiple Location Control",
    "_multipleOrderQuantity": "Order Multiple",
    "_none": "None",
    "_noShipVia": "No ShipVia",
    "_noUnpostedSlipDupsSite": "No Unposted Dups. in a Site",
    "_noUnpostedSlipDups": "No Unposted Dups.",
    "_noSlipDupsSite": "No Dups. in a Site",
    "_nextShipmentNumber": "Next Shipment Number",
    "_noSlipDups": "No Slip # Duplications",
    "_number": "Number",
    "_orderToQuantity": "Order To",
    "_postSiteChanges": "Post Site Changes",
    "_postItemSiteChanges": "Post Item Site Changes",
    "_postCountTagToDefault": "When Count Tag Qty exceeds Slip Qty",
    "_postToDefaultLocation": "Post to Default Loc.",
    "_physicalInventory": "Physical Inventory (Counting)",
    "_printPacklist": "Print Packlist",
    "_purchaseOrder": "Purchase Order",
    "_purchaseOrders": "Purchase Orders",
    "_rack": "Rack",
    "_recallShipment": "Recall Shipment",
    "_recallShipment?": "Are you sure you want to recall this shipment?",
    "_receiptQtyTolerancePct": "By the Following Amount (%)",
    "_receive": "Receive",
    "_receiveLocation": "Receive",
    "_receiveAll": "Receive All",
    "_receiveAll?": "Are you sure you want to enter receipt for all these items?",
    "_received": "Received",
    "_receiveBreeder": "Receive Breeder",
    "_receivePurchaseOrder": "Receive Purchase Order",
    "_receiveMaterial": "Receive Material",
    "_receiveReturn": "Receive Return",
    "_recordPPVOnReceipt": "Record Purchase Price Variance on Receipt",
    "_relocate": "Relocate",
    "_reorderLevel": "Reorder Level",
    "_reporting": "Reporting",
    "_restrictedLocations": "Restricted Locations",
    "_restrictedLocationsAllowed": "Restricted Locations Allowed",
    "_returned": "Returned",
    "_returnFromShipping": "Return From Shipping",
    "_returnLine": "Return Line",
    "_safetyStock": "Safety Stock",
    "_ship": "Ship",
    "_shipped": "Shipped",
    "_shipping": "Shipping",
    "_shippingAndReceiving": "Shipping and Receiving",
    "_shipmentNumberPolicy": "Shipment Number Policy",
    "_shipto": "Ship To",
    "_siteTransfer": "Site Transfer",
    "_siteZone": "Site Zone",
    "_showInvoiced": "Show Invoiced Shipments",
    "_showShipped": "Show Shipped",
    "_shipment": "Shipment",
    "_shipShipment": "Ship Shipment",
    "_shipments": "Shipments",
    "_standard": "Standard",
    "_stockLocation": "Stock",
    "_toReceive": "To Receive",
    "_toIssue": "To Issue",
    "_trackingNumber": "Tracking Number",
    "_transferOrder": "Transfer Order",
    "_unReleased": "Unreleased",
    "_useDefaultLocation": "Use Default",
    "_useParameters": "Use Parameters",
    "_useParametersManual": "Enforce on Manual Orders",
    "_userDefinedLocation": "Location Name",
    "_useStandardCost": "Standard Costs",
    "_useAverageCost": "Average Costs",
    "_vendor": "Vendor",
    "_vendors": "Vendors",
    "_vendorType": "Vendor Type",
    "_warnIfReceiptQtyDiffers": "Warn if PO Receipt Qty differs from receivable Qty"
  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
