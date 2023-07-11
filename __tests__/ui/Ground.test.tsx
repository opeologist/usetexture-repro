import { Ground } from "@/ui/Ground";
import { act, create, waitFor } from "@react-three/test-renderer";
import { Suspense } from "react";

describe("Ground", () => {
  it("renders", async () => {
    const renderer = await create(
      <Suspense>
        <Ground />
      </Suspense>
    );

    await waitFor(() => expect(renderer.scene.children[0]).toBeDefined());
    console.log(renderer.scene.children);
  });
});
