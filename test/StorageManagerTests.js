const assert = require("assert");
const StorageManager = require("./../utility/StorageManager");

describe("StorageManager", function() {
    

    describe("set()", function() {
        let manager = new StorageManager("test-set");

        it("should set the data element's correct property", function() {
            manager.set("foo", "bar");

            assert.equal(manager.data["foo"], "bar", "Data's foo entry should be 'bar'.");
        });

        it("should set the correct value in the JSON file", function() {
            manager.set("bar", "baz");
            const fileData = require("./../storage/test-set.json");
        
            assert.equal(fileData.bar, "baz", "File did not contain the 'bar' property!");
        });
        it("should be retrievable via get", function() {
            manager.set("baz", "foobar");

            assert.equal(manager.get("baz"), "foobar", "get('baz') did not return 'foobar'.");
        });

        after(function() {
            manager.clean(true);
        });
    });

    describe("get()", function() {
        let manager = new StorageManager("test-get");

        it("should return undefined for a non-existent variable", function() {
            assert.equal(typeof manager.get("foo"), "undefined", "'foo' was not undefined!");
        });

        it("should return the value of a previously set item", function() {
            manager.set("bar", "baz");

            assert.equal(manager.get("bar"), "baz", "'bar' value was not set to 'baz'.");
        });

        after(function() {
            manager.clean(true);
        });
    });
});