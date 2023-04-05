const Cert = artifacts.require("Cert");

contract("Cert", function (accounts) {
  let instance;

  it("Should deploy the contract", async function () {
    instance = await Cert.deployed();
    const deployer = instance.constructor.class_defaults.from;

    assert.isTrue(deployer === accounts[0]);
  });

  it("Should issue the certificate", async function () {
    const trx = await instance.issue(128, "Lindsey", "SRPH", "A", "2052-05-16");

    assert.isAtLeast(trx.receipt.blockNumber, 2);
  });

  it("Should read the certificate", async function () {
    const result = await instance.Certificates(128);

    assert.equal(result[0], "Lindsey");
    assert.equal(result[1], "SRPH");
    assert.equal(result[2], "A");
    assert.equal(result[3], "2052-05-16");
  });

  it("Should revert the transaction", async function () {
    try {
      const trx = await instance.issue(
        128,
        "Lindsey",
        "SRPH",
        "A",
        "2052-05-16",
        { from: accounts[1] }
      );
    } catch (error) {
      assert.equal(error.data.message, "revert");
      assert.equal(error.data.reason, "Not Authorized");
    }
  });
});
