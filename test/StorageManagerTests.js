const assert = require("assert");
const StorageManager = require("./../utility/StorageManager");

describe("StorageManager", function() {
    let manager = new StorageManager("test");

    describe("set()", function() {
        it("should set the data element's correct property", function() {
            manager.set("foo", "bar");

            assert.equal(manager.data["foo"], "bar", "Data's foo entry should be 'bar'.");
        });

        it("should set the correct value in the JSON file", function() {
            manager.set("bar", "baz");
            const fileData = require("./../storage/test.json");
        
            assert.equal(fileData.bar, "baz", "File did not contain the 'bar' property!");
        });
        it("should be retrievable via get", function() {
            manager.set("baz", "foobar");

            assert.equal(manager.get("baz"), "foobar", "get('baz') did not return 'foobar'.");
        });
    });
});