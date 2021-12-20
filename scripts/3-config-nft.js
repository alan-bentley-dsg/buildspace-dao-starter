import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6A009574D916A769E7b0cEC26e2A7FF04eB21d85",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Sage Beagle of Wisdom",
        description: "This NFT will give you access to BeagleDAO!",
        image: readFileSync("scripts/assets/beagle.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
