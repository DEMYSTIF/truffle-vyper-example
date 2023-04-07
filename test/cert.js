const Cert = artifacts.require("Cert");

contract("Cert", function (accounts) {
  let instance;

  it("Should deploy the contract", async function () {
    instance = await Cert.deployed();
    const deployer = instance.constructor.class_defaults.from;

    assert.isTrue(deployer === accounts[0]);
  });

  it("Should issue the certificate", async function () {
    const trx = await instance.issue(
      128,
      "Lindsey",
      "SRPH",
      "A",
      "2052-05-16",
      "0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f"
    );

    const log = trx.logs[0];
    assert.equal(log.event, "Issued");
    assert.equal(String(log.args.id), "128");
    assert.equal(log.args.course, "SRPH");
    assert.equal(log.args.date, "2052-05-16");
  });

  it("Should read the certificate", async function () {
    const result = await instance.Certificates(128);

    assert.equal(result["name"], "Lindsey");
    assert.equal(result["course"], "SRPH");
    assert.equal(result["grade"], "A");
    assert.equal(result["date"], "2052-05-16");
    assert.equal(
      result["document"],
      "0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f"
    );
  });

  it("Should revert the transaction", async function () {
    try {
      const trx = await instance.issue(
        128,
        "Abigail",
        "SRPH",
        "S",
        "2052-05-16",
        "0x2f44454d59535449462f6e6578742d63657274696669636174652d646170702f",
        { from: accounts[1] }
      );
    } catch (error) {
      assert.equal(error.data.message, "revert");
      assert.equal(error.data.reason, "Not Authorized");
    }
  });
});
