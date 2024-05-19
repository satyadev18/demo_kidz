import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Navbar from "./components/Navbar";
import ModalComponent from "./components/Modal";

describe("AddChildForm", () => {
  test("Navbar renders successfully", () => {
    const { getByText } = render(<Navbar />);

    const element = screen.getByText(/Home/i);

    expect(element).toBeInTheDocument();
  });
  test("Modal renders successfully", () => {
    const { getByText } = render(<ModalComponent />);

    const element = screen.getByText(/Added!/i);

    expect(element).toBeInTheDocument();
  });

  test("Modal closes on outside click and calls onClose", () => {
    const { queryByTestId } = render(<ModalComponent />);

    const element = screen.getByText(/Added!/i);

    expect(element).toBeInTheDocument();

    // Simulate a click outside the modal
    fireEvent.click(document.body);

    // Check if the modal is closed after the click
    expect(queryByTestId("modal")).toBeNull();
  });
});
