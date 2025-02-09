import { Button } from "@/shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";
import cls from "./Button.module.scss";

describe("button component", () => {
  test("should render correctly", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  test("to have a main class", () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toHaveClass(cls.Button);
  });

  test("should have type='button' by default", () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  test("should allow changing type", () => {
    render(<Button type={"submit"}>Button</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});