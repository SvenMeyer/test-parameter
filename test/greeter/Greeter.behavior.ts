import { expect } from "chai";

export function shouldBehaveLikeGreeter(parameter: string): void {
  it("should return the new greeting once it's changed", async function () {
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal(parameter);

    await this.greeter.setGreeting("Bonjour, le monde!");
    expect(await this.greeter.connect(this.signers.admin).greet()).to.equal("Bonjour, le monde!");
  });
}
