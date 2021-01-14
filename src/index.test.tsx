import { render } from "@testing-library/react";
import Avatar from ".";
import { AvatarStyle } from ".";

it("renders without crashing", async () => {
  render(
    <Avatar avatarStyle={AvatarStyle.Circle} />
  );
});
