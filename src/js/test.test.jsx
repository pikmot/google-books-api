import { cleanup } from "@testing-library/react";
import { expect, afterEach } from "vitest";
import * as matchers from "@testing-library/jest-dom";

import { useState } from "react";

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import BookList from "../components/BookList/BookList.jsx";
import Book from "../components/Book/Book.jsx";
import PageCounter from "../components/PageCounter/PageCounter.jsx";

import userEvent from "@testing-library/user-event";

// extends matchers to include dom related testing stuff
expect.extend(matchers);

// remove anything from the dom after each test, so that we always start with a clean slate
afterEach(() => {
  cleanup();
});

describe("Setup test", () => {
  it("checks true", () => {
    expect(true).toBe(true);
  });
});

describe("BookList Tests", () => {
  //check wrapper for Booklist
  it("Check wrapper for Booklist is <div>", () => {
    const { container } = render(<BookList />);
    expect(container.firstChild.tagName).toBe("DIV");
  });
});

describe("Book Tests", () => {
  //check wrapper for Booklist
  it("Check wrapper for Book is <div>", () => {
    const { container } = render(
      <Book
        image="https://example.com/cover.jpg"
        author={["Eiichiro Oda", "Eiichiro Oda — full bio"]}
        title={["One Piece", "One Piece — full title"]}
        description={[
          "Monkey D. Luffy and his pirate crew search the Grand Line for the ultimate treasure known as the One Piece.",
        ]}
      />,
    );
    expect(container.firstChild.tagName).toBe("DIV");
  });

  it("Check Book fields", () => {
    render(
      <Book
        image="https://example.com/cover.jpg"
        author={["Eiichiro Oda", "Eiichiro Oda — full bio"]}
        title={["One Piece", "One Piece — full title"]}
        description={[
          "Monkey D. Luffy and his pirate crew search the Grand Line for the ultimate treasure known as the One Piece.",
        ]}
      />,
    );
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/cover.jpg");

    const author = screen.getByText(/Eiichiro Oda/i);
    expect(author).toBeInTheDocument();

    //"One Piece apepars in both Title and description -> need to be more specific"
    const title = screen.getByText("Title: One Piece");
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      "Description: Monkey D. Luffy and his pirate crew search the Grand Line for the ultimate treasure known as the One Piece.",
    );
    expect(description).toBeInTheDocument();
  });

  it("Should toggle the modalIsOpen from false -> true", async () => {
    const user = userEvent.setup();

    //we need to mock fucntions i guess?
    const handleModal = vi.fn();
    const setModalDetails = vi.fn();

    const rerender = render(
      <Book
        image="https://example.com/cover.jpg"
        author={["Eiichiro Oda", "Eiichiro Oda — full bio"]}
        title={["One Piece", "One Piece — full title"]}
        description={[
          "Monkey D. Luffy and his pirate crew search the Grand Line for the ultimate treasure known as the One Piece.",
        ]}
        modalIsOpen={false}
        handleModal={handleModal}
        setModalDetails={setModalDetails}
      />,
    );

    // screen.debug();

    //works since image i achild of parent -> click will work i think
    await user.click(screen.getByRole("img"));

    //using mocked functions
    expect(handleModal).toHaveBeenCalledTimes(1);

    //after click -> value is called !value
    expect(handleModal).toHaveBeenCalledWith(true);

    // screen.debug();
  });
});

describe("Page Counter Tests", () => {
  //check wrapper for Booklist
  it("Display default values of -1", () => {
    render(<PageCounter />);

    const count = screen.getByText("-1 / -1");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("-1 / -1");
  });

  it("Check buttons have arrows", () => {
    render(<PageCounter />);

    const back = screen.getByRole("button", { name: "←" });
    const next = screen.getByRole("button", { name: "→" });

    expect(back).toBeInTheDocument();
    expect(next).toBeInTheDocument();
    expect(back).toHaveTextContent("←");
    expect(next).toHaveTextContent("→");
  });

  it("Check buttons disabled at start and end pages", () => {
    const { rerender } = render(<PageCounter currentPage={1} finalPage={3} />);
    //store to rerender later
    const back = screen.getByRole("button", { name: "←" });

    expect(back).toBeInTheDocument();
    expect(back).toBeDisabled();

    rerender(<PageCounter currentPage={3} finalPage={3} />);

    const next = screen.getByRole("button", { name: "→" });

    expect(next).toBeInTheDocument();
    expect(next).toBeDisabled();
  });

  it("Display rendered values of 1 of 3", () => {
    render(<PageCounter currentPage={1} finalPage={3} />);

    const count = screen.getByText("1 / 3");
    expect(count).toBeInTheDocument();
    expect(count).toHaveTextContent("1");
    expect(count).toHaveTextContent("3");
  });

  it("Display rendered values after increment and decrement", async () => {
    const user = userEvent.setup();
    const setCurrentPage = vi.fn();

    const { rerender } = render(
      //has to be rerender -> tried with others dont' work
      <PageCounter
        currentPage={1}
        finalPage={3}
        setCurrentPage={setCurrentPage}
      />,
    );

    let count = screen.getByText(/\//i);
    expect(count).toHaveTextContent("1");
    expect(count).toHaveTextContent("3");

    const next = screen.getByRole("button", { name: "→" });
    await user.click(next);
    // screen.debug();
    expect(setCurrentPage).toHaveBeenCalledWith(2); //setting new incremetn to 2

    rerender(
      <PageCounter
        currentPage={2}
        finalPage={3}
        setCurrentPage={setCurrentPage}
      />,
    );

    count = screen.getByText(/\//i);
    expect(count).toHaveTextContent("2");
    expect(count).toHaveTextContent("3");

    const back = screen.getByRole("button", { name: "←" });
    await user.click(back);
    // screen.debug();
    expect(setCurrentPage).toHaveBeenCalledWith(1); //setting new incremetn to 2
  });
});
