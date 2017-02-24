const assert = require("assert");
const StorageManager = require("./../utility/StorageManager");

describe("StorageManager", function() {
    let manager = new StorageManager("test");

    describe("set()", function() {
        it("should set the data element's correct property", function() {
            manager.set("foo", "bar");

            assert.equal(manager.data["foo"], "bar", "Data's foo entry should be 'bar'.");
        });
    });
});