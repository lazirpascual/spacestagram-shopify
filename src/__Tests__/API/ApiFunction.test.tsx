import { fetchImagesData } from "../../Api/index";

describe("test the functionality of fetchImagesData()", () => {
  test("proper length is returned", async () => {
    const imagesData = await fetchImagesData(5);
    expect(imagesData.length).toBe(5);
  });
});
