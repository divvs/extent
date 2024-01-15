import { expect, test } from "bun:test"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("hello world", () => {
  render(<App />)
  expect(screen.getByText("hello, world!")).toBeTruthy()
})
