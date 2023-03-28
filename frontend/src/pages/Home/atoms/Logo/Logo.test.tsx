import { render } from "@testing-library/react";
import Logo from "./Logo";

describe("Logo component", () => {
  test("renders logo image", () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText("logo");
    expect(logoImage).toBeInTheDocument();
  });
});
