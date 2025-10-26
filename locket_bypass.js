let body = $response.body;
try {
    let obj = JSON.parse(body);
    
    if (obj && obj.subscriber) {
        // Create entitlements
        obj.subscriber.entitlements = {
            "premium": {
                "expires_date": "9999-12-31T23:59:59Z",
                "product_identifier": "locket_gold_year",
                "purchase_date": "2009-07-20T00:00:00Z"
            }
        };
        
        // Create subscriptions
        obj.subscriber.subscriptions = {
            "locket_gold_year": {
                "expires_date": "9999-12-31T23:59:59Z",
                "original_purchase_date": "2009-07-20T00:00:00Z",
                "purchase_date": "2009-07-20T00:00:00Z",
                "ownership_type": "PURCHASED",
                "store": "app_store"
            }
        };
        
        console.log("Locket bypass applied successfully");
    }
} catch (e) {
    console.log("Locket bypass error: " + e);
}

$done({body: JSON.stringify(obj)});
