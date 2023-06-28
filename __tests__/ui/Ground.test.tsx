import { Ground } from "@/ui/Ground";
import { create } from "@react-three/test-renderer";

describe("Ground", () => {
  it("renders", async () => {
    const renderer = await create(<Ground />);

    console.log(renderer.scene.children);
  });
});
